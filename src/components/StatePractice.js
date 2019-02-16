import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Mariam",
      age: "28"
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age}</h3>
      </div>
    );
  }
}

export default App;
