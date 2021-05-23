import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });

import { Edit } from "../../components/Edit";

const expense = {
  description: "Food",
  amount: 450,
  createdAt: 3000,
  id: "123abe",
};

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <Edit
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expense}
    />
  );
});

test("should render Edit", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle edit expense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expense);
  expect(history.push).toHaveBeenCalledWith("/");
  expect(editExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

test("should handle remove expense", () => {
  wrapper.find("button").simulate("click");
  expect(history.push).toHaveBeenCalledWith("/");
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expense.id });
});
