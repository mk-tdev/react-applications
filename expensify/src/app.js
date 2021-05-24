import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./app/store/configureStore";
import { startSetExpenses } from "./app/actions/expenses";
import { setTextFilter } from "./app/actions/filters";
import getVisibleExpenses from "./app/selectors/expenses";
import AppRouter from "./app/routes/AppRouter";
import "./styles/styles.scss";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import "./firebase/firebase";
// import "./playground/promises";

const store = configureStore();

const template = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading!</p>, document.getElementById("root"));
store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(template, document.getElementById("root"));
});
