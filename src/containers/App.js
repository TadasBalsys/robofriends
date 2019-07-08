import React, { Component } from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry"

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response =>
      response.json().then(users => this.setState({ robots: users }))
    );
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filterRobots = robots.filter(robot => {
      return robot.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });

    return !robots.length ? (
      <h1 className="text-center">Loading...</h1>
    ) : (
      <div className="container-fluid w-100">
        <div className="row ">
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filterRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      </div>
    );
  }
}

export default App;
