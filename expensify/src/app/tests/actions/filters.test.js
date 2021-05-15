import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../../actions/filters";

import moment from "moment";

test("should setTextFilter", () => {
  expect(setTextFilter("rent")).toEqual({
    type: "SET_TEXT_FILTER",
    text: "rent",
  });
});

test("should setTextFilter", () => {
  expect(setTextFilter()).toEqual({ type: "SET_TEXT_FILTER", text: "" });
});

test("should sortByDate", () => {
  expect(sortByDate()).toEqual({ type: "SORT_BY_DATE" });
});

test("should sortByAmount", () => {
  expect(sortByAmount()).toEqual({ type: "SORT_BY_AMOUNT" });
});

test("should setStartDate", () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: "SET_START_DATE",
    date: moment(0),
  });
});

test("should setEndDate", () => {
  const action = setEndDate(moment(0));

  expect(action).toEqual({
    type: "SET_END_DATE",
    date: moment(0),
  });
});
