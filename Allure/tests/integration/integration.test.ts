import request from "supertest";
import app from "../../src/userApp";
import { validator } from "../../src/validator/userValidator";
import type { user } from "../../src/schemas/userSchema";

describe("API Integration validation", () => {
  test("GET request for entire user list", async () => {
    const res = await request(app).get("/users").expect(200);

    res.body.forEach((User: user) => {
      expect(validator(User)).toBe(true);
    });
  });

  test("Get user for a single user", async () => {
    const res = await request(app).get("/users/1").expect(200);

    expect(res.body.name).toEqual("Ritish");
    expect(validator(res.body)).toBe(true);
  });

  test("Add user to the list", async () => {
    const res = await request(app)
      .post("/users")
      .send({ name: "Shrikanth", email: "Sri420@gmail.com" })
      .expect(201);

    expect(validator(res.body)).toBe(true);
  });
});
