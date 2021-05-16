import filtersReducer from "../../reducers/filters";
import moment from "moment";

const defaultFilterState = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month"),
};
test("should test default", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });

  expect(state).toEqual(defaultFilterState);
});

test("should SORT_BY_AMOUNT", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });

  expect(state).toEqual({ ...defaultFilterState, sortBy: "amount" });
});

test("should SORT_BY_DATE", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };
  const state = filtersReducer(currentState, { type: "SORT_BY_DATE" });

  expect(state.sortBy).toBe("date");
});

test("should SET_TEXT_FILTER", () => {
  const state = filtersReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text: "rent",
  });

  expect(state.text).toEqual("rent");
});

test("should SET_START_DATE", () => {
  const state = filtersReducer(undefined, {
    type: "SET_START_DATE",
    date: defaultFilterState.startDate,
  });

  expect(state.startDate).toEqual(defaultFilterState.startDate);
});

test("should SET_END_DATE", () => {
  const state = filtersReducer(undefined, {
    type: "SET_END_DATE",
    date: moment(),
  });

  expect(state.endDate).not.toBeNull();
});
