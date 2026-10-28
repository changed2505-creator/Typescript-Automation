import Ajv from "ajv";

const ajv = new Ajv();

const envSchema = {
  type: "object",
  properties: {
    PORT: { type: "string" },
    JWT_SECRET: { type: "string" },
    BASE_URL: { type: "string" },
    TOKEN_EXPIRY: { type: "string" },
  },
  required: ["PORT", "JWT_SECRET", "BASE_URL", "TOKEN_EXPIRY"],
};

export const validateEnv = () => {
  const validator = ajv.compile(envSchema);
  const validate = validator(process.env);

  console.log(`validated`);

  if (!validate) {
    throw new Error(JSON.stringify(validator.errors));
  }
};
