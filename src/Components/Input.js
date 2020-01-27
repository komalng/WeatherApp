import React, { Component } from "react";
import axios from 'axios';



class Input extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      city: "",
      main: "",
      sky: "",
      isClicked: false,
      error: ""
    };
  }
  /**
   * change input value.
   * @name onChange
   * @function
   */
  onChange = event => {
    event.preventDefault()
    this.setState({ [event.target.name]: event.target.value })
  }


  /**
   * show the weather details.
   * @name getWeather
   * @function
   */

  getWeather = async e => {
    e.preventDefault()
    const response = await this.getDetails(this.state.input)
    try {
      const responseParsed = response.data.list[0];
      const city = responseParsed.name;
      const main = responseParsed.main;
      const sky = responseParsed.weather[0].main;
      const isClicked = true;
      this.setState({
        city: city,
        main: main,
        sky: sky,
        isClicked: isClicked
      })
    } catch (e) {
      switch (e.name) {
        case "SyntaxError":
          this.setState({ error: "Sorry our mistake Please try again" })
          break;
        default:
          this.setState({ error: "Please Enter valid City Name" })
      }
    }
  }
  /**
   * This function return the url of weather api.
   * @name getUrl
   * @function
   * @param {string} city Name of the city
   * @return {string} url of weather api.
   */

  getUrl = city => {
    const url = `https://api.openweathermap.org/data/2.5/find?q=${city}&units=imperial&appid=0232360a3413e8978e5fe050bd19bcc2`
    return url;
  }

  /**
   * This function gives weather details when city is passed.
   * @name getDetails
   * @function
   * @return {Object} weather data.
   */
  getDetails = async (city) => {
    try {
      const url = this.getUrl(city)
      const response = await axios.get(url)
      return response
    } catch (e) {
      // console.log(response,"for response")
      const errorStatus = e.response.status;
      // console.log(errorStatus,"this one")
      switch (errorStatus) {
        case 400:
          this.setState({
            error: "Please Enter City Name"
          })
          return {
            message: "Please Enter City Name",
            status: 400
          }

        case 503:
          this.setState({
            error: "Url is not working properly Please try again"
          })
          return {
            message: e.message,
          }
      }
    }

  }


  render() {
    const br = <br />;
    const main = this.state.main;
    return <div>
      <h1> Weather of  City</h1>{br}{br}
      <form>
        <input text="text" name="input" placeholder="Enter City Name :- " onChange={this.onChange} required />{br}{br}
      </form>
      <button onClick={this.getWeather}> Enter </button>
      {br}{br}

      {
        <div className="display">
          <h4>City:- {this.state.city}</h4>
          <h3>
            {/* all weather details display */}
            temperature:{main.temp} {br}{br}
            pressure:{main.pressure}{br}{br}
            humidity:{main.humidity}{br}{br}
            temp_min:{main.temp_min}{br}{br}
            temp_max:{main.temp_max}{br}{br}
            Sky:- {this.state.sky}
          </h3>
        </div>
      }
      {this.state.error}

    </div>
  }
}



export default Input;