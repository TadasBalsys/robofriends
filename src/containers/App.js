// App.js is called Container or Smart Component
import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import Header from '../components/Header';

// Some Redux setup
// mapStateToProps tels what piece of state in store need to be listen to and send props to component tree.
const mapStateToProps = state => {
  // searchField state, that going to be return by mapStateToProps function, which is going to be used as props by the App. That state is going to come from the state.searchRobots.searchField (which comes from reducers.js.) Because in index.js store is created and searchRobots is passed as property, now I can use sate.searchRobots
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

// mapDispatchToProps tells what props should be listen to actions that need to get dispatched.
// React Redux docs: mapDispatchToProps lets you to create a function that dispatch when called, and pass those functions as props to your components
const mapDispatchToProps = dispatch => {
  // dispatch is what triggers the action. The action (setSearchField) is an object which is created in actions.js. In order to send this action, there is a need of dispatch() to send the action to reducer
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};
// End of Redux setup

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filterRobots = robots.filter(robot => {
      return robot.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });

    return isPending ? (
      <h1 className="text-center">Loading...</h1>
    ) : (
      <div className="container-fluid w-100">
        <div className="row ">
          <Header />
          <SearchBox searchChange={onSearchChange} />
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
// Connect - a higher order function which connects App.js to redux store ("Subscribe any changes in the Redux Store")
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
