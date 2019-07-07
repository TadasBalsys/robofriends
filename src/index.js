import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"
import "./card.css";

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import * as serviceWorker from "./serviceWorker";

// import { robots } from "./robots";

// const  getRobots = fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())
//   .then(data => console.log(data));

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
