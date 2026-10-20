import Ajv from "ajv";
import addFormats from "ajv-formats";
import { userSchema, type user } from "../../src/schemas/userSchema";

const ajv = new Ajv();
addFormats(ajv);
const validation = ajv.compile<user>(userSchema);

describe("User schema valiadtion", () => {
  test("Passes the schema valiadation", () => {
    const vaildUser: user = {
      id: 1,
      name: "Hitesh",
    };
    expect(validation(vaildUser)).toBe(true);
  });
  test("rejects a user with a string id", () => {
    const invalidUser = {
      id: "2",
      name: "Hitesh",
    };
    expect(validation(invalidUser)).toBe(false);
  });
});
