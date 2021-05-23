import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });

import { ExpensesListFilter } from "../../components/ExpensesListFilter";
import { filters, altFilters } from "../fixtures/filters";

let setTextFilter, sortByAmount, sortByDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  wrapper = shallow(
    <ExpensesListFilter
      filters={filters}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setTextFilter={setTextFilter}
    />
  );
});

test("should render ExpensesListFilter", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpensesListFilter with different filters", () => {
  wrapper.setProps({
    filters: altFilters,
  });
  expect(wrapper).toMatchSnapshot();
});

test("should update state when text changes", () => {
  wrapper
    .find("input")
    .at(0)
    .simulate("change", { target: { value: "PUB" } });
  expect(setTextFilter).toHaveBeenLastCalledWith("PUB");
});

test("should update state when select changes", () => {
  wrapper
    .find("select")
    .at(0)
    .simulate("change", { target: { value: "date" } });
  expect(sortByDate).toHaveBeenCalled();
});

test("should update state when select changes", () => {
  wrapper
    .find("select")
    .at(0)
    .simulate("change", { target: { value: "amount" } });
  expect(sortByAmount).toHaveBeenCalled();
});
