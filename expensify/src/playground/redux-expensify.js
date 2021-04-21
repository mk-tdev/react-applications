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
const removeExpense = ({ id = "" } = {}) => {
  return {
    type: "REMOVE_EXPENSE",
    id,
  };
};

// EDIT_EXPENSE
const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updates,
  };
};

// SET_TEXT_FILTER
const setTextFilter = (text = "") => {
  return {
    type: "SET_TEXT_FILTER",
    text,
  };
};

// SORT_BY_DATE
const sortByDate = () => {
  return {
    type: "SORT_BY_DATE",
  };
};

// SORT_BY_AMOUNT
const sortByAmount = () => {
  return {
    type: "SORT_BY_AMOUNT",
  };
};

// SET_START_DATE
const setStartDate = (date) => {
  return {
    type: "SET_START_DATE",
    date,
  };
};

// SET_END_DATE
const setEndDate = (date) => {
  return {
    type: "SET_END_DATE",
    date,
  };
};

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
    case "REMOVE_EXPENSE":
      return state.filter((e) => e.id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((e) => {
        if (e.id === action.id) {
          return { ...e, ...action.updates };
        }
        return e;
      });
    default:
      return state;
  }
};

const filterReducer = (state = defaultFilterState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };

    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.date,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.date,
      };

    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt >= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") return a.createdAt < b.createdAt ? 1 : -1;

      if (sortBy === "amount") return a.amount < b.amount ? 1 : -1;
    });
};

const store = createStore(
  combineReducers({ expenses: expensifyReducer, filters: filterReducer })
);

const unsubs = store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log("visibleExpenses: ", visibleExpenses);
});
const expense1 = store.dispatch(
  addExpense({ description: "Rent", amount: 700, createdAt: 1000 })
);
const expense2 = store.dispatch(
  addExpense({ description: "PUB", amount: 100, createdAt: 2000 })
);

// store.dispatch(removeExpense({ id: expense1.expense.id }));
// store.dispatch(editExpense(expense2.expense.id, { amount: 80 }));

// store.dispatch(setTextFilter("rent"));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
store.dispatch(setEndDate(999));

// console.log("store: ", store.getState());
unsubs();
