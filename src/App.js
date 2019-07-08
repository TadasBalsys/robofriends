import React, { Component } from "react";
import SearchBox from "./SearchBox";
import CardList from "./CardList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }

  componentDidMount() {
   fetch("https://jsonplaceholder.typicode.com/users").then(
      response => response.json().then(users => this.setState({robots: users}))
    );
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filterRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLocaleLowerCase()
        .includes(this.state.searchField.toLocaleLowerCase());
    });
    
    if (!this.state.robots.length) {
      return <h1 className='text-center'>Loading...</h1>;
    }
    return (
      <div className="container">
        <div className="row ">
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filterRobots} />
        </div>
      </div>
    );
  }
}

export default App;
