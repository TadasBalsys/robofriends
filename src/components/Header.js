import React, { Component } from "react";
import CounterButton from "./CounterButton";

class Header extends Component {
  // React LifeCycle hook
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    console.log("Header");
    return (
      <div className="text-center col-12 mt-5">
        <h1>RoboFriends</h1>
        <CounterButton  color={'red'}/>
      </div>
    );
  }
}

export default Header;
