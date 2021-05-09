import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import expensifyReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";

export default () => {
  // store creationg
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    combineReducers({ expenses: expensifyReducer, filters: filterReducer }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
