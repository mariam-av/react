import React from "react";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      top: "",
      botton: "",
      image: "https://i.imgflip.com/1bij.jpg",
      allMemeImg: []
    };
  }

  handlerChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  onClickHandler = event => {
    event.preventDefault();
    const min = 1;
    const max = this.state.allMemeImg.length;
    const rand = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(rand);
    console.log(this.state.allMemeImg[rand]);
    this.setState({
      image: this.state.allMemeImg[rand].url
    });
    console.log(this.state.image);
  };
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({
          allMemeImg: memes
        });
      });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onClickHandler}>
          <input name="top" onChange={this.handlerChange} />
          <input name="bottom" onChange={this.handlerChange} />
          <button> Gen </button>
        </form>
        <h1>{this.state.top} </h1>
        <img src={this.state.image} />
        <h1>{this.state.bottom} </h1>
      </div>
    );
  }
}

export default MemeGenerator;
