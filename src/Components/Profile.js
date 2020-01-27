import React, { Component } from 'react';
import axios from "axios";




class About extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      gender: "",
      unique: false,
      error: ""


    }
  }

  /**
   * This function will return gender and name
   * @name getGender
   * @function
   */

  getGender = async () => {
    const response = await this.getResponseOfApi(this.props.input)

    try {
      switch (response.data.gender) {
        case "null":
          this.setState({
            unique: true
          });
          break;
        default:
          this.setState({
            gender: response.data.gender
          });

      }
    } catch (e) {
      this.setState({
        error: "Please enter valid name"
      })
      return { message: "Please enter valid name" }


    }

  }
  /**
   * takes name return response.
   * @name getResponseOfApi
   * @function
   * @param {String} name // name of a person
   */


  getResponseOfApi = async name => {
    try {
      const response = await axios.get(`https://genderapi.io/api/?name=${name}&key=5dd76cd9756fae281206fdf2`)
      return response;
    } catch (e) {
      switch (e.response.status) {
        case 503:
          this.setState({
            error: "Url is not working properly please try again :-)"
          })
          return {
            message: "Url is not working properly please try again",
            code: 503
          }
      }
    }
  }

  componentDidMount() {
    this.setState({
      name: this.props.input
    })
    this.getGender();
  }


  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return <div><h2>Name: {this.state.name}</h2>
      <h2>Gender: {this.state.gender}</h2>
      <form>
        <input type="radio" name="gender" value="male" onChange={this.onChange} checked={this.state.gender === "male"} disabled={this.state.gender === "female"} /> Male<br />
        <input type="radio" name="gender" value="female" onChange={this.onChange} checked={this.state.gender === "female"} disabled={this.state.gender === "male"} /> Female<br />
      </form>
      {this.state.unique && <h1> Please Select your gender</h1>}
    </div>




  }
}
export default About;