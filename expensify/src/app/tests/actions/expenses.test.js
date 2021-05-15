import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

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
