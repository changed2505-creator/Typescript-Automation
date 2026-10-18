import { type JSONSchemaType } from "ajv";

export interface user {
  id: number;
  name: string;
  age: number;
  email: string;
}

export const userSchema: JSONSchemaType<user> = {
  type: "object",
  properties: {
    id: { type: "number" },
    name: { type: "string", minLength: 1 },
    age: { type: "number" },
    email: { type: "string", format: "email" },
  },
  required: ["id", "name", "age", "email"],
  additionalProperties: false,
};
