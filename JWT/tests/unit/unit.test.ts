import { addUser } from "../../src/controller/userControl";

describe("Test the functinality of adding user", () => {
  test("Should add a valid user", () => {
    const req: any = { body: { name: "antony", email: "Ant1y@gmail.com" } };
    const res: any = {
      statusCode: 0,
      body: null,
      status(code: number) {
        this.statusCode = code;
        return this;
      },
      json(payload: any) {
        this.body = payload;
        return this;
      },
    };
    addUser(req, res);

    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({
      id: 3,
      name: "antony",
      email: "Ant1y@gmail.com",
    });
  });
});
