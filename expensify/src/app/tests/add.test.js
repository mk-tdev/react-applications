const add = (a, b) => a + b;
const generateName = (name) => `Hello, ${name}`;

test("should add 2 numbers", () => {
  const result = add(3, 5);

  expect(result).toBe(8);
});

test("should generateName", () => {
  const result = generateName("Mk");
  expect(result).toBe("Hello, Mk");
});
