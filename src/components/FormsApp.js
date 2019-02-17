import React, { Component } from "react";

class FormsApp extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: null,
      gender: "",
      location: "",
      isRed: false,
      isBlue: true
    };
    this.handlerClick = this.handlerClick.bind(this);
  }
  handlerClick(event) {
    const { name, value, type, checked } = event.target;
    console.log(name + value + type + checked);
    if (type === "checkbox")
      this.setState({
        [name]: checked
      });
    else
      this.setState({
        [name]: value
      });
  }
  render() {
    return (
      <main>
        <form>
          <input
            name="firstName"
            placeholder="First Name"
            onChange={this.handlerClick}
          />
          <br />
          <input
            placeholder="Last Name"
            name="lastName"
            onChange={this.handlerClick}
          />
          <br />
          <input placeholder="Age" name="age" onChange={this.handlerClick} />
          <br />
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handlerClick}
          />{" "}
          Male
          <br />
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handlerClick}
          />
          Female
          <br />
          <select
            value={this.state.location}
            name="location"
            onChange={this.handlerClick}
          >
            <option value="yerevan">Yerevan</option>
            <option value="moscow">Moscow</option>
            <option value="newyork">New York</option>
          </select>
          <br />
          <input type="checkbox" name="isRed" onChange={this.handlerClick} />
          Red <br />
          <input type="checkbox" name="isBlue" onChange={this.handlerClick} />
          Blue <br />
          <button>Submit</button>
        </form>

        <div>
          <h1>First Name: {this.state.firstName}</h1>
          <h1>Last Name:{this.state.lastName} </h1>
          <h1>Age: {this.state.age}</h1>
          <h1>Gender: {this.state.gender}</h1>
          <h1>Location: {this.state.location}</h1>
          <h1>color: {this.state.isRed ? "Red " : "Blue "}</h1>
        </div>
      </main>
    );
  }
}

export default FormsApp;
