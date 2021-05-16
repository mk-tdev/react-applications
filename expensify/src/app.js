import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./app/store/configureStore";
import { addExpense } from "./app/actions/expenses";
import { setTextFilter } from "./app/actions/filters";
import getVisibleExpenses from "./app/selectors/expenses";
import AppRouter from "./app/routes/AppRouter";
import "./styles/styles.scss";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";
// import "./playground/promises";

const store = configureStore();

store.dispatch(
  addExpense({ description: "Rent", amount: 700, createdAt: 1000 })
);
store.dispatch(
  addExpense({ description: "PUB without Rent", amount: 100, createdAt: 2000 })
);
store.dispatch(
  addExpense({ description: "Food", amount: 500, createdAt: 12000 })
);
// store.dispatch(setTextFilter("rent"));
const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const template = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(template, document.getElementById("root"));
