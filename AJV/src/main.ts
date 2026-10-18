import { testUserSchema } from "./validators/userValidation";

const userDetails = {
  id: 420,
  name: "Chor",
  age: 42,
  email: "maihuchor420@gmail.com",
};

if (testUserSchema(userDetails)) {
  console.log("Valiadtion Passed!!!", userDetails);
} else {
  console.log("Schema validation failed");
}
