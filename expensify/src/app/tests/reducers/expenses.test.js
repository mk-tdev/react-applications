import expensesReducer from "../../reducers/expenses";
import moment from "moment";

const expensesData = [
  { description: "Rent", amount: 700, createdAt: 1000, id: "123abc" },
  { description: "PUB", amount: 300, createdAt: 2000, id: "123abd" },
  { description: "Food", amount: 450, createdAt: 3000, id: "123abe" },
];

test("should test default", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });

  expect(state).toEqual([]);
});

test("should ADD_EXPENSE", () => {
  const newExpense = {
    description: "Recharge",
    amount: 40,
    createdAt: 4000,
    id: "123abf",
  };
  const action = {
    type: "ADD_EXPENSE",
    expense: newExpense,
  };
  const state = expensesReducer(expensesData, action);
  expect(state).toEqual([...expensesData, newExpense]);
});

test("should EDIT_EXPENSE", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: expensesData[2].id,
    updates: { amount: 500 },
  };
  const state = expensesReducer(expensesData, action);
  expect(state[2].amount).toEqual(500);
});

test("should not EDIT_EXPENSE when not found ", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: 'unavailable',
    updates: { amount: 500 },
  };
  const state = expensesReducer(expensesData, action);
  expect(state).toEqual(expensesData);
});

test("should REMOVE_EXPENSE", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expensesData[1].id,
  };
  const state = expensesReducer(expensesData, action);
  expect(state).toEqual([expensesData[0], expensesData[2]]);
});

test("should REMOVE_EXPENSE when ID mismatch", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };
  const state = expensesReducer(expensesData, action);
  expect(state).toEqual(expensesData);
});
