import React from 'react';
import { Redirect } from 'react-router-dom';



class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    }
  }
  /** set redirect state value true  if button is clicked
   * @name setRedirect
   * @function
   */

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  /**
   *use to redirect the page to product if redirect state  is true
   * @name renderRedirect
   * @function
   */

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/product" render />

    }
  }
  render() {
    return (
      <div>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>Redirect</button>
      </div>
    )
  }
}


export default MyComponent;