import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleChange}> Increase </button>
      </div>
    );
  }
}

export default Counter;
