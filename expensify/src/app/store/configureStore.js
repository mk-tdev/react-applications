import { createStore, combineReducers } from "redux";
import expensifyReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";

export default () => {
  // store creationg
  const store = createStore(
    combineReducers({ expenses: expensifyReducer, filters: filterReducer })
  );

  return store;
};
