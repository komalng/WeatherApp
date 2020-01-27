import React from 'react';
import './App.css';
import Input from "./Components/Input";
import { Route, Switch, } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Profile from "./Components/Profile";
import Home from "./Components/Home";







class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      isClicked: false
    }
  }


  /**
   * for changing value of input
   * @name onChange
   * @function
   */

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }




  render() {
    return (
      <div className="App">
        <div>
          <h2>Welcome :-) </h2>
          <ul className="navbar-nav mr-auto">
            {/* Link tag  is allowing to navigate to different routes  */}
            <li><Link to={'/home'} > Home  </Link></li>
          </ul>
        </div>
        <Switch>
          {/*  Switch tage will  return only one matching route */}
          <>
            {/* Route will shown component based on matching a path to a URL. */}
            <Route exact path='/home' render={() => <Home input={this.onChange} data={this.state.input} />} />
            <Route exact path='/weather' component={Input} />
            <Route path='/gender' render={() => <Profile input={this.state.input} />} />
          </>
        </Switch>


      </div>


    )
  };
}


localStorage.setItem('App', 'INFO');
localStorage.setItem('App.SidePicker', 'INFO');
localStorage.setItem('App.SidePicker.pickSide', 'INFO');
localStorage.setItem('App.SidePicker.componentDidMount', 'INFO');
export default App;
