import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });

import { ExpenseListItem } from "../../components/ExpenseListItem";

const expense = {
  description: "Rent",
  amount: 700,
  createdAt: 1000,
  id: "123abc",
};

test("should render ExpenseListItem", () => {
  const wrapper = shallow(<ExpenseListItem expense={expense} />);
  expect(wrapper).toMatchSnapshot();
});
