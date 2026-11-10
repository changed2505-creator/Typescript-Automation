import Ajv from "ajv";
import addFormats from "ajv-formats";
import { type user, userSchema } from "../schemas/userSchema";

const ajv = new Ajv();
addFormats(ajv);
const validator = ajv.compile(userSchema);

export function testUserSchema(data: unknown): data is user {
  const validation = validator(data);
  if (!validation) {
    const error = ajv.errorsText(validator.errors, { separator: "\n" });
    throw new Error(`Validation errors:${error}`);
  }
  return validation;
}
