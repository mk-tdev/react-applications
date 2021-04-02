import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Create from "./app/components/Create";
import Home from "./app/components/Home";

import "./styles/styles.scss";

const app = <p>App</p>;

const routes = (
  <BrowserRouter>
    <Route path="/">
      <Home />
    </Route>

    <Route path="/create">
      <Create />
    </Route>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));
