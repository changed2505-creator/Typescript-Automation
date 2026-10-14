// import {
//   type familyName,
//   type person,
//   createPerson,
//   describeFamily,
// } from "./utils.js";
// import { createServer } from "node:http";
// import express from "express";

// const fam = createPerson("Rahul", 54, "Male");
// console.log(describeFamily(fam));

// const server = createServer((req, res) => {
//   console.log(req.method);
//   res.end("Hello! Bro");
// });
// server.listen(3000);

// const app = express();
// app.get("/", (req, res) => {
//   console.log(req.method);
//   res.send({ message: "Heloooo!" });
// });
// app.listen(3000);

// ---------------------------------------------

import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";
import todoRoutes from "../routes/todo.js";

const app = express();
app.use(todoRoutes);
app.use(express.json());
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ Message: "Error!!!" });
});
app.listen(3000);
