// redux expects that actions returns objects. If other cases, app need extras packages( e.g. redux-thunk)
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";

// gets the user text from input and sets "state"
export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

// actions can only return object, but cause there is installed redux-thunk, I can return a function ("if action returns function it is a middleware")
export const requestRobots = () => dispatch => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users").then(response =>
    response
      .json()
      .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
      .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
  );
};
