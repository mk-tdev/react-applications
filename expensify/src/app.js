import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./app/store/configureStore";
import { startSetExpenses } from "./app/actions/expenses";
import { setLOGGEDIn, setLOGGEDOut } from "./app/actions/auth";
import AppRouter from "./app/routes/AppRouter";
import "./styles/styles.scss";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import { firebase } from "./firebase/firebase";
// import "./playground/promises";

const store = configureStore();

const template = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(template, document.getElementById("root"));
// ReactDOM.render(<p>Loading!</p>, document.getElementById("root"));
// store.dispatch(startSetExpenses()).then(() => {
// });

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(setLOGGEDIn(user.uid));
    store.dispatch(startSetExpenses());
  } else {
    store.dispatch(setLOGGEDOut());
  }
});
