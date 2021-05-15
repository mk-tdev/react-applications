import selectExpenses from "../../selectors/expenses";

const expenses = [
  { description: "Rent", amount: 700, createdAt: 1000, id: "123abc" },
  { description: "PUB", amount: 300, createdAt: 2000, id: "123abd" },
  { description: "Food", amount: 450, createdAt: 3000, id: "123abe" },
];

test("should filter by text valye", () => {
  const result = selectExpenses(expenses, { text: "", sortBy: "date" });

  expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});
