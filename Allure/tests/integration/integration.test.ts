import request from "supertest";
import app from "../../src/userApp";
import { validator } from "../../src/validator/userValidator";
import type { user } from "../../src/schemas/userSchema";
import { createAllureAttachment } from "../../src/helper/allure_helper";
import { attachment, ContentType, step } from "allure-js-commons";
import fs from "fs";

describe("API Integration validation", () => {
  test("GET request for entire user list", async () => {
    await step("Sends GET request to user", async () => {
      const res = await request(app).get("/users").expect(200);

      await step("Attach API response", async () => {
        await createAllureAttachment(
          "GET API REQUEST all users",
          JSON.stringify(res.body, null, 2),
          ContentType.JSON,
        );
      });

      await step("Validate if every user follows the schema", () => {
        res.body.forEach((User: user) => {
          expect(validator(User)).toBe(true);
        });
      });
    });
  });

  test("Get user for a single user", async () => {
    const res = await request(app).get("/users/1").expect(200);

    await createAllureAttachment(
      "GET API REQUEST single user",
      JSON.stringify(res.body, null, 2),
      ContentType.JSON,
    );

    expect(res.body.name).toEqual("Ritish");
    expect(validator(res.body)).toBe(true);
  });

  test("Add user to the list", async () => {
    const res = await request(app).post("/users").send({});

    if (res.status !== 201) {
      attachment(
        "Error log",
        `Status:${res.status}\nBody:${JSON.stringify(res.body, null, 2)}`,
        ContentType.TEXT,
      );

      expect(res.status).toBe(400);
    } else {
      await createAllureAttachment(
        "POST API REQUEST all users",
        JSON.stringify(res.body, null, 2),
        ContentType.JSON,
      );

      expect(validator(res.body)).toBe(true);
    }
  });
});
