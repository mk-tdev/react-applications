import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";
import Heading from "./components/Heading";
import { GlobalProvider } from "./contexts/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Heading />

        <div className="d-flex justify-content-center">
          <Switch>
            <Route path="/" component={Todos} exact />
            <Route path="/add-todo" component={AddTodo} />
            <Route path="/edit-todo/:id" component={EditTodo} />
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
