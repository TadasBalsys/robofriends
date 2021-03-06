import React, { Component } from "react";

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  // React LifeCycle hook
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.count !== nextState.count ? true : false;
  }
  
  updateCount = () => {
    this.setState(state => {
      return { count: state.count + 1 };
    });
  };

  render() {
    console.log("CounterButton");
    return (
      <button color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
