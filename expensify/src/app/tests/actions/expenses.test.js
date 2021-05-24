import {
  addExpense,
  editExpense,
  removeExpense,
  initAddExpense,
  startSetExpenses,
  setExpenses,
} from "../../actions/expenses";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import database from "../../../firebase/firebase";
import { expenses } from "../fixtures/expenses";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database
    .ref("expenses")
    .set(expensesData)
    .then(() => done());
});

test("should removeExpense", () => {
  const action = removeExpense({ id: "123abc" });

  expect(action).toEqual({ type: "REMOVE_EXPENSE", id: "123abc" });
});

test("should editExpense", () => {
  const action = editExpense("123abc", { note: "updated note" });

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: { note: "updated note" },
  });
});

test("should addExpense", () => {
  const expenseData = {
    note: "new note",
    description: "Rent",
    amount: 700,
    createdAt: 1000,
    id: "asd-123-abc",
  };
  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: { ...expenseData, id: expect.any(String) },
  });
});

test("should addExpense with null", () => {
  const expenseData = {};
  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {},
  });
});

test("should add new expense to database", (done) => {
  const store = mockStore({});
  const expenseData = {
    description: "SSD",
    amount: 9000,
    note: "For Storage",
    createdAt: 1080,
  };
  store
    .dispatch(initAddExpense(expenseData))
    .then((_) => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should add new expense to database", (done) => {
  const store = mockStore({});
  const expenseData = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0,
  };
  store
    .dispatch(initAddExpense({}))
    .then((_) => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should add new expense with default to database", () => {
  const action = setExpenses(expenses);

  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses: expenses,
  });
});

test("should fetch the expenses from firebase", (done) => {
  const store = mockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses,
    });
    done();
  });
});
