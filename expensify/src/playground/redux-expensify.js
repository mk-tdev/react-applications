import { createStore, combineReducers } from "redux";

import { v4 as uuidv4 } from "uuid";

// ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => {
  return {
    type: "ADD_EXPENSE",
    expense: {
      id: uuidv4(),
      description,
      note,
      amount,
      createdAt,
    },
  };
};
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

const demoState = {
  expenses: [
    {
      id: "1a",
      description: "Rent",
      note: "fixed payment",
      amount: 700,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  },
};

const defaultExpensesState = [];
const defaultFilterState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const expensifyReducer = (state = defaultExpensesState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];

    default:
      return state;
  }
};

const filterReducer = (state = defaultFilterState, action) => {
  switch (action.type) {
    case "":
      break;

    default:
      return state;
  }
};

const store = createStore(
  combineReducers({ expenses: expensifyReducer, filters: filterReducer })
);

const unsubs = store.subscribe(() => console.log("state: ", store.getState()));
store.dispatch(addExpense({ description: "Rent", amount: 700 }));
store.dispatch(addExpense({ description: "PUB", amount: 100 }));

// console.log("store: ", store.getState());
unsubs();
