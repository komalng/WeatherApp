import React from 'react';
import './App.css'; 
import axios from "axios";
import Input from "./Components/Input";
import { Route, Switch, } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Profile from "./Components/Profile";
import Home from "./Components/Home";


class  App extends React.Component {
  constructor(){
    super();
    this.state = {
      isClicked:false,
      input:""  
    }
  }
  

  onClick = ()=>{
    this.setState({
      isClicked:true,
      
    })

  }
  onChange = (event)=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }


 

  render(){
  return (
    <div className="App">
     <div>
          <h2>Welcome :-) </h2>
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/weather'} className="nav-link">Weather</Link></li>
  {this.state.input.length > 0 && this.state.isClicked && <li><Link to={'/profile'} className="nav-link">profiles</Link></li>}      
          </ul>
          <form>
          <input text = "text" name = "input" placeholder = "Enter Profile :- " onChange = {this.onChange}/>
      </form>
      <button onClick = {this.onClick} > Enter </button>    
          <hr />

          </div>
       
          <Switch>
            <>
              <Route exact  path='/' component={Home} />
              <Route exact  path='/weather' component={Input} />
             <Route path='/profile' render={ () =><Profile input = {this.state.input} ></Profile>} />
              </>
          </Switch>   
    </div>
        
    
  )};
}
export default App;
