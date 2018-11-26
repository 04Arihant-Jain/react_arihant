import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  Inc = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  Dec = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.Inc}>Increment</button>
        <button onClick={this.Dec}>Decrement</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default Counter;
