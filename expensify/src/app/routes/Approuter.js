import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Create from "../components/Create";
import Edit from "../components/Edit";
import Header from "../components/Header";
import Help from "../components/Help";
import Home from "../components/Home";
import Login from "../components/Login";
import NotFound from "../components/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/edit" component={Edit} exact />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/help" component={Help} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
