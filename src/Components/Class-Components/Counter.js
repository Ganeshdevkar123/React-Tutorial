import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  incerement() {
    // this.setState({
    //   count: this.state.count + 1,
    // });
    this.setState(prevState=>({
        count:prevState.count+1
    }))
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Counter = {this.state.count}</h1>
        <button className="primary" onClick={() => this.incerement()}>Incerement</button>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
