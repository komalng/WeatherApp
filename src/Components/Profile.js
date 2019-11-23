import React, { Component } from 'react';
import axios from "axios"

class About extends Component {
  constructor(){
    super()
    this.state = {
      name:"",
      gender:"",
      unique: true
   
    }

  }


  getGender =  ()=>{
     axios.get(`https://genderapi.io/api/?name=${this.props.input}&key=5dd76cd9756fae281206fdf2`)

    .then(response =>{
      if(response.data.gender == "null"){
        this.setState({
          unique: false
        });
      }
      else{
        this.setState({
          gender:response.data.gender,
          // unique:this.state.unique+1
        });
      }
    }).catch(err => {
      console.log(err.message)
    })   
  

  }

  componentDidMount(){
    this.setState({
      name:this.props.input
    })
    this.getGender();
}


onChange = (event)=>{
  this.setState({
    [event.target.name]: event.target.value
  })
}
  render() {
    console.log(this.state.gender);
      return <div><h2>Name: {this.state.name}</h2>
  <h2>Gender: {this.state.gender}</h2>
  <form>
    <input type="radio" name="gender" value="male" onChange = {this.onChange} checked = {this.state.gender === "male"}  disabled = {this.state.gender === "female" && this.state.unique}/> Male<br/>
    <input type="radio" name="gender" value="female" onChange = {this.onChange} checked = {this.state.gender === "female"} disabled = {this.state.gender === "male" && this.state.unique}/> Female<br/>
  </form>
  
    {this.state.unique && <h1> Please Select your gender</h1>}
      </div>
       
        
       

  }
}

export default About;