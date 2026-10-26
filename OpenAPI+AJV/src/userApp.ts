import express, { type Application } from "express";
import userRouter from "./routes/userRouter";

const app: Application = express();

app.use(express.json());
app.use("/users", userRouter);

export default app;
