import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/custom.scss";
import "bootstrap/dist/js/bootstrap.js";
import Root from "./Views/Root/Root";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename="/app">
    <Root />
  </Router>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
