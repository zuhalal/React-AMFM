import React, { Component } from "react";
import Unmount from "../Unmount";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      data: {},
      isClicked: false,
    };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      });
  }

  componentDidUpdate() {
    console.log("BERUBAH");
  }

  render() {
    let { counter, data, isClicked } = this.state;

    return (
      <div>
        {counter}
        <button onClick={this.increment}>Klik untuk +</button>
        <button onClick={this.decrement}>Klik untuk -</button>
        <div>
          <h1>INI DATA API:</h1>
          {data.title}
        </div>
        <div>
          <button
            onClick={() => {
              this.setState({
                isClicked: !this.state.isClicked,
              });
            }}
          >
            Ini bakal ngebuka unmount
          </button>
        </div>
        <div>{isClicked ? <Unmount zuhal={data} /> : null}</div>
      </div>
    );
  }
}
