import { testUserSchema } from "../validators/userValidation";

describe("Schema Validation", () => {
  test("For right schema", () => {
    const user = {
      id: 420,
      name: "Chor",
      age: 42,
      email: "maihuchor420@gmail.com",
    };
    expect(testUserSchema(user)).toBe(true);
  });

  test("Missing Fields", () => {
    const user = {
      id: 321,
      name: "Hunger",
    };
    expect(testUserSchema(user)).toBe(false);
  });

  test("Wrong format", () => {
    const user = {
      id: 420,
      name: "Chor",
      age: 42,
      email: "maihuchor420--hi-there",
    };
    expect(testUserSchema(user)).toBe(false);
  });
});
