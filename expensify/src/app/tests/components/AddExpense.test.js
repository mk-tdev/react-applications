import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });

import { AddExpense } from "../../components/AddExpense";

const expense = {
  description: "Food",
  amount: 450,
  createdAt: 3000,
  id: "123abe",
};

let initAddExpense, history, wrapper;

beforeEach(() => {
  initAddExpense = jest.fn();
  history = { push: jest.fn() };

  wrapper = shallow(
    <AddExpense initAddExpense={initAddExpense} history={history} />
  );
});

test("should render AddExpense", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expense);
  expect(history.push).toHaveBeenCalledWith("/");
  expect(initAddExpense).toHaveBeenLastCalledWith(expense);
});
