import Ajv from "ajv";
import addFormats from "ajv-formats";
import fs from "fs";
import YAML from "yaml";
// import $RefParser from "@apidevtools/json-schema-ref-parser";
// import { OpenAPIV3 } from "openapi-types";

export async function valiadtion() {
  const yamlToText = fs.readFileSync("./src/docs/OpenAPI_schema.yaml", "utf8");

  const doc = YAML.parse(yamlToText);

  // const dereferenced_doc = (await $RefParser.dereference(
  //   doc,
  // )) as OpenAPIV3.Document;

  const userSchema = doc.components!.schemas!.UserSchema as object;

  if (!userSchema) {
    throw new Error(`UserSchema not found!!!`);
  }

  const ajv = new Ajv();
  addFormats(ajv);

  return ajv.compile(userSchema);
}
