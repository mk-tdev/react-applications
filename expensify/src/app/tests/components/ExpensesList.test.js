import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });

import { ExpensesList } from "../../components/ExpensesList";

const expenses = [
  { description: "Rent", amount: 700, createdAt: 1000, id: "123abc" },
  { description: "PUB", amount: 300, createdAt: 2000, id: "123abd" },
  { description: "Food", amount: 450, createdAt: 3000, id: "123abe" },
];

test("should render ExpensesList", () => {
  const wrapper = shallow(<ExpensesList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpensesList", () => {
  const wrapper = shallow(<ExpensesList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
