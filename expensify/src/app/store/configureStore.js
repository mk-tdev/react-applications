import { createStore, combineReducers } from "redux";
import expensifyReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";

export default () => {
  // store creationg
  const store = createStore(
    combineReducers({ expenses: expensifyReducer, filters: filterReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
