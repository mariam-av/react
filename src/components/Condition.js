import React, { Component } from "react";

class Condition extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle() {
    this.setState(prevState => {
      return {
        loggedIn: !prevState.loggedIn
      };
    });
  }

  render() {
    let text = this.state.loggedIn ? "Login" : "Log out";
    let statusText = this.state.loggedIn ? "logged in" : "logged out";
    return (
      <div>
        <h1> You are {statusText} !</h1>
        <button onClick={this.clickHandle}>{text}</button>
      </div>
    );
  }
}

export default Condition;
