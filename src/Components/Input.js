import React,{Component} from "react";
import axios from 'axios';
require('dotenv').config()
// console.log(process.env.ApiKey,"=-==");
 

class Input extends Component{
  constructor(){
    super();
    this.state = {
      input:"",
      city:"",
      main:"",
      sky:"",
      isClicked:false
    };
  }

  onChange  = event =>{
    event.preventDefault()
      this.setState({[event.target.name]: event.target.value})
  }

  
  getWeather = (e) =>{
    e.preventDefault()
    axios.get(`https://api.openweathermap.org/data/2.5/find?q=${this.state.input}&units=imperial&appid=0232360a3413e8978e5fe050bd19bcc2`).then(response =>{
        this.setState({city: response.data.list[0].name,
          main:response.data.list[0].main,sky:response.data.list[0].weather[0].main,isClicked:true})
      }).catch(err => {
        console.log(err.message)
      })
      
      
  }


  render (){
    const br = <br />
    return <div>
      <h1> Weather of  City</h1>{br}{br}
      <form>
      <input text = "text" name = "input" placeholder = "Enter City Name :- " onChange = {this.onChange} />{br}{br}
      </form>
      <button onClick = {this.getWeather}> Enter </button>

      {
        this.state.isClicked && <div className = "display">
  <h4>City:- {this.state.city}</h4>
  <h3>temperature:{this.state.main.temp} {br}{br}
  pressure:{this.state.main.pressure}{br}{br}
  humidity:{this.state.main.humidity}{br}{br}
  temp_min:{this.state.main.temp_min}{br}{br}
  temp_max:{this.state.main.temp_max}{br}{br}
  sea_level:{this.state.main.sea_level}{br}{br}
  grnd_level:{this.state.main.grnd_level}{br}{br}
  Sky:- {this.state.sky}
</h3>
  </div>


 
      }



    </div>
  }
}





export default Input;