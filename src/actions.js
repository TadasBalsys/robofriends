import { CHANGE_SEARCH_FIELD } from "./constants";

// gets the user text from input and sets "state" 
export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});
