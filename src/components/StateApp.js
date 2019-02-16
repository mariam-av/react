import React, { Component } from "react";

class State extends Component {
  constructor() {
    super();
    this.state = {
      answer: "!"
    };
  }
  render() {
    return <div>Hi Masha {this.state.answer}</div>;
  }
}

export default State;
