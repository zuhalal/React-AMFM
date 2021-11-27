import React, { Component } from "react";
import Anak from "../Anak";
import MauDongDitampilin from "../MauDongDitampilin";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, data: {}, isChange: false, makanan: "ayam" };
  }

  increment = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  decrement = () => {
    this.setState({
      value: this.state.value - 1,
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

  ubahMakanan = (value) => {
    this.setState({
      makanan: value,
    });
  };

  componentDidUpdate() {
    console.log("AAAAAAAAa");
  }
  render() {
    let { value, data, makanan, isChange } = this.state;

    return (
      <div>
        <div>
          <button onClick={this.increment}>Click me To +</button>
        </div>
        <Anak amfm={value} decrement={this.decrement} />
        {data.title}
        <h1>Makanan:</h1>
        {makanan}
        <button
          onClick={() =>
            this.setState({
              isChange: !this.state.isChange,
            })
          }
        >
          Tampilkan
        </button>
        {isChange && <MauDongDitampilin ubahMakanan={this.ubahMakanan} />}
      </div>
    );
  }
}
