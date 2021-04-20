import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: "INCREMENT",
    incrementBy,
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: "DECREMENT",
    decrementBy,
  };
};

const resetCount = () => {
  return {
    type: "RESET",
  };
};

const setCount = ({ count } = {}) => {
  return {
    type: "SET",
    count,
  };
};

const defState = { count: 0, lastAction: "" };

const countReducer = (state = defState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.incrementBy };
    case "DECREMENT":
      return { count: state.count - action.decrementBy };
    case "RESET":
      return { count: 0 };
    case "SET":
      return { count: action.count };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubs = store.subscribe(() => console.log("state: ", store.getState()));

store.dispatch(incrementCount({ incrementBy: 2 }));
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(resetCount());
store.dispatch(setCount({ count: 10 }));
store.dispatch(decrementCount({ decrementBy: 2 }));
store.dispatch(setCount({ count: 109 }));

unsubs();
