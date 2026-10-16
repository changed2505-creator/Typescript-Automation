import { fetchData, forEach, multiply2Num, Obj, storeObject } from "../main";

// beforeAll(() => {
//   console.log(`Create once`);
// });
// beforeEach(() => {
//   console.log(`Hello Outside`);
// });

// describe("Run functions", () => {
//   beforeEach(() => {
//     console.log(`Hello inside`);
//   });
//   test("If 1*2 is 2", () => {
//     expect(multiply2Num(1, 2)).toBe(2);
//   });
//   test("Object assigned", () => {
//     expect(storeObject("Dilip", 36)).toEqual({ Name: "Dilip", Age: 36 });
//   });
// });

// test("If Promise is resolved", () => {
//   return fetchData().then((data) => {
//     expect(data).toBe(`I got resolved`);
//   });
// });

// test("If Promise is resolved", async () => {
//   const Data = await fetchData();
//   expect(Data).toBe(`I got resolved`);
// });

// test("If Promise is rejected", async () => {
//   expect.assertions(1);
//   try {
//     await fetchData();
//   } catch (err) {
//     expect(err).toMatch("I got rejected");
//   }
// });

// test("If Promise is resolved", async () => {
//   await expect(fetchData()).resolves.toBe("I got resolved");
// });

// test("If Promise is rejected", async () => {
//   await expect(fetchData()).rejects.toMatch("I got rejected");
// });

// afterAll(() => {
//   console.log(`after everything`);
// });
// afterEach(() => {
//   console.log(`after each test`);
// });

const mocking = jest.fn((val: number): number => 5 + val);

test("To test the mock function", () => {
  forEach([1, 2], mocking);
  expect(mocking.mock.results[1]?.value).toBe(7);
  expect(mocking.mock.calls[0]?.[0]).toBe(1);
});

test("Spying on run", () => {
  const spy = jest.spyOn(Obj, "run");
  Obj.run();

  expect(spy).toMatchSnapshot();
});
