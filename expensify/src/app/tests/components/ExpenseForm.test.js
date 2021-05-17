import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });

import ExpenseForm from "../../components/ExpenseForm";

const expense = {
  description: "Food",
  amount: 450,
  createdAt: 3000,
  id: "123abe",
};

test("should render ExpenseForm", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm with expense data", () => {
  const wrapper = shallow(<ExpenseForm expense={expense} />);
  expect(wrapper).toMatchSnapshot();
});
