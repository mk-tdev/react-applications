import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });
import moment from "moment";

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

test("should render error when submitting with no data", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });

  expect(wrapper.state("errorText").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should update state when description changes", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(0)
    .simulate("change", { target: { value: "desc" } });

  expect(wrapper.state("description")).toBe("desc");
  expect(wrapper).toMatchSnapshot();
});

test("should update state when note textarea changes", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("textarea")
    .simulate("change", { target: { value: "this is description" } });

  expect(wrapper.state("note")).toBe("this is description");
  expect(wrapper).toMatchSnapshot();
});

test("should update state when valid amount provided", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", { target: { value: "10.80" } });

  expect(wrapper.state("amount")).toBe("10.80");
  expect(wrapper).toMatchSnapshot();
});

test("should not update state when in-valid amount provided", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", { target: { value: "10.880" } });

  expect(wrapper.state("amount")).toBe("");
  expect(wrapper).toMatchSnapshot();
});

test("should call on submit props", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expense} onSubmit={onSubmitSpy} />
  );
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state("errorText")).toBe("");

  expect(onSubmitSpy).toHaveBeenCalledWith({
    amount: 450,
    createdAt: 3000,
    description: "Food",
    note: undefined,
  });
});

test("should call onDateChanged", () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("#date").prop("onDateChange")(now);
  expect(wrapper.state("createdAt")).toBe(now);
});

test("should call onFocuesChanged", () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("#date").prop("onFocusChange")({ focused });
  expect(wrapper.state("calendarFocued")).toBe(focused);
});
