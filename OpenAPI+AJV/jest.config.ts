/** @type {import("ts-jest").JestConfigWithTsJest} **/
export default {
  testEnvironment: "allure-jest/node",
  preset: "ts-jest/presets/default-esm",
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
};
