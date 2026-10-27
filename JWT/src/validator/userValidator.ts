import Ajv from "ajv";
import addFormats from "ajv-formats";
import fs from "fs";
import YAML from "yaml";

export async function valiadtion() {
  const yamlToText = fs.readFileSync("./src/docs/OpenAPI_schema.yaml", "utf8");

  const doc = YAML.parse(yamlToText);

  const userSchema = doc.components!.schemas!.UserSchema as object;

  if (!userSchema) {
    throw new Error(`UserSchema not found!!!`);
  }

  const ajv = new Ajv();
  addFormats(ajv);

  return ajv.compile(userSchema);
}
