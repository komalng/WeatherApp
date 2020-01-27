import React, { Component } from "react";
import { Link } from 'react-router-dom';


class Home extends Component {

  constructor() {
    super();
    this.state = {
      isClicked: false
    }
  }

  onClick = () => {
    // setting validation for button.
    if (this.props.data.length > 1) {
      this.setState({
        isClicked: true
      })
    }
  }


// running or not
  render() {
    return (<div>
      <hr />
      <li><Link to={'/weather'} className="nav-link">Weather</Link></li>
      {this.props.data.length > 1 && this.state.isClicked && <li><Link to={'/gender'} className="nav-link">Gender</Link></li>}
      <input text="text" name="input" placeholder="Enter Profile :- " onChange={this.props.input} />
      <button onClick={this.onClick}  > Enter </button>
      <br />
      <br />


    </div>)
  }
}

export default Home;