import React from "react";
import ReactDOM from "react-dom";
// Redux 
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "../src/containers/App";
import { searchRobots } from "./reducers";
import "./index.css"
import "./card.css";

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import * as serviceWorker from "./serviceWorker";

// const  store is Redux Store - place were all states is.
const store = createStore(searchRobots);

ReactDOM.render(
    // Provider component from react-redux will pass store (a.k.a State) to all components down to component tree
    // The store us is rootReducer or what ever reducers (this case searchRobots) to create the store.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
