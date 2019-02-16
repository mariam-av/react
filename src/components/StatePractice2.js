import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      logged: true
    };
  }
  render() {
    return (
      <div>
        <h1>You are currently logged {this.state.logged ? "in" : "out"}</h1>
      </div>
    );
  }
}
export default App;
