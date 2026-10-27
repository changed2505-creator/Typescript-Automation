import { type user } from "../../src/controller/userControl";
import { valiadtion } from "../../src/validator/userValidator";

let validator: any;

beforeAll(async () => {
  validator = await valiadtion();
});

describe("User schema valiadtion", () => {
  test("Passes the schema valiadation", () => {
    const vaildUser: user = {
      id: 1,
      name: "Hitesh",
    };
    expect(validator(vaildUser)).toBe(true);
  });
  test("rejects a user with a string id", () => {
    const invalidUser = {
      id: "2",
      name: "Hitesh",
    };
    expect(validator(invalidUser)).toBe(false);
  });
});
