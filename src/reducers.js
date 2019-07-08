import { CHANGE_SEARCH_FIELD } from "./constants";
// Redux The 3 Principles
// 1. Single source of truth - in this case initialState.
// 2. State is read only - searchRobots only creates state, but doesn't modify it.
// 3. Changes using pure functions.
const initialState = {
  searchField: ""
};

// Reducer, a pure function
export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      // return Object.assign({}, state, {searchField: action.payload}) //Another way to do it, but less cleaner
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};
