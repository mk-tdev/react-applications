import moment from "moment";

const filters = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month"),
};

const altFilters = {
  text: "rent",
  sortBy: "amout",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month"),
};

export { filters, altFilters };
