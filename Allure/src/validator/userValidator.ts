import Ajv from "ajv";
import { userSchema, type user } from "../schemas/userSchema";
import addFormats from "ajv-formats";

const ajv = new Ajv();
addFormats(ajv);
export const validator = ajv.compile<user>(userSchema);
