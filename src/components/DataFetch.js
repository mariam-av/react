import React, { Component } from "react";

class DataFetch extends Component {
  constructor() {
    super();
    this.state = {
      people: {}
    };
  }

  // componentDidMount() {
  //   fetch("https://swapi.co/api/people/1/")
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       this.setState({
  //         people: data
  //       });
  //     });
  // }

  render() {
    return <div>{this.state.people.height}</div>;
  }
}

export default DataFetch;
