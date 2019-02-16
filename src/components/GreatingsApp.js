import React, { Component } from "react";

function GreatingsApp() {
  return (
    <div>
      <Header username="Mariam" />
      <Greatings />
    </div>
  );
}

class Header extends Component {
  render() {
    return (
      <div>
        <h3> Hi, {this.props.username} </h3>
      </div>
    );
  }
}

class Greatings extends Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 12)
      return (
        <div>
          {" "}
          <p> Good morning</p>
        </div>
      );
    else if (hours >= 12 && hours < 17)
      return (
        <div>
          {" "}
          <p> Good evening</p>
        </div>
      );
    else if (hours > 17)
      return (
        <div>
          {" "}
          <p> Good night</p>
        </div>
      );
    return <div />;
  }
}

export default GreatingsApp;
