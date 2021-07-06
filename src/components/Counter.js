import React, { Component } from "react";
import "./counter.css";
import { IoRepeat } from "react-icons/io5";

export default class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  zero = () => {
    this.setState({
      count: 0,
    });
  };
  render() {
    return (
      <div className="maindiv">
        <h1>{this.state.count}</h1>
        <div>
          <button className="green" onClick={this.increment}>
            +
          </button>
          <button className="yellow" onClick={this.zero}>
            <IoRepeat />
          </button>
          <button className="red" onClick={this.decrement}>
            -
          </button>
        </div>
      </div>
    );
  }
}
