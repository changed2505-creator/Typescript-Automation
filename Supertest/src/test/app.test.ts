import app from "../app";
import request from "supertest";

describe("Testing request for Default", () => {
  test("Get response", async () => {
    const data = await request(app)
      .get("/Intro")
      .expect((data) => {
        if (!Array.isArray(data.body)) {
          throw new Error(`Expected an Array!!!`);
        }
      });

    expect(data.status).toBe(200);
    expect(data.body).toEqual([{ Introduction: `I am Nobody` }]);
  });
});

describe("Testing request for value", () => {
  test("Get on /Intro", async () => {
    const data = await request(app)
      .get("/Intro/Rohith")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(data.body[0].Introduction).toBe(`I am Rohith`);
  });
});

describe("Sending a POST Request", () => {
  test("Add an element", async () => {
    const details = {
      Name: "Sharath",
      Age: 45,
    };
    const data = await request(app)
      .post("/Intro")
      .send(details)
      .expect("Content-Type", /json/)
      .expect(201);

    expect(data.body[1]).toHaveProperty("details");
    expect(data.body).toMatchObject([
      { Introduction: `I am Nobody` },
      {
        details: {
          Name: "Sharath",
          Age: 45,
        },
      },
    ]);
  });
});
