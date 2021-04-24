import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./app/store/configureStore";
import { addExpense } from "./app/actions/expenses";
import { setTextFilter } from "./app/actions/filters";
import getVisibleExpenses from "./app/selectors/expenses";
import AppRouter from "./app/routes/AppRouter";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(
  addExpense({ description: "Rent", amount: 700, createdAt: 1000 })
);
store.dispatch(
  addExpense({ description: "PUB without Rent", amount: 100, createdAt: 2000 })
);
store.dispatch(setTextFilter("rent"));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log("state: ", visibleExpenses);
ReactDOM.render(<AppRouter store={store} />, document.getElementById("root"));
