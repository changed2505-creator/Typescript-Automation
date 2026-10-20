import { type JSONSchemaType } from "ajv";

export interface user {
  id: number;
  name: string;
  email?: string;
}

export const userSchema: JSONSchemaType<user> = {
  type: "object",
  properties: {
    id: { type: "number" },
    name: { type: "string", minLength: 1 },
    email: { type: "string", format: "email", nullable: true },
  },
  required: ["id", "name"],
  additionalProperties: false,
};
