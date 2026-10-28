import dotenv from "dotenv";
import type { StringValue } from "ms";
import { validateEnv } from "../validator/envValidator";

dotenv.config();

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is missing");
}

if (!process.env.BASE_URL) {
  throw new Error("BASE_URL is missing");
}

if (!process.env.TOKEN_EXPIRY) {
  throw new Error("TOKEN_EXPIRY is missing");
}

validateEnv();

export const config = {
  PORT: Number(process.env.PORT),
  JWT_SECRET: process.env.JWT_SECRET,
  BASE_URL: process.env.BASE_URL,
  TOKEN_EXPIRY: process.env.TOKEN_EXPIRY as StringValue,
};
