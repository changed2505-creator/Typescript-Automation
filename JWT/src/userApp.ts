import express, { type Application } from "express";
import userRouter from "./routes/userRouter";
import authRouter from "./routes/authRouter";

const app: Application = express();

app.use(express.json());
app.use("/users", userRouter);
app.use("/auth", authRouter);

export default app;
