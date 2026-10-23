import express, { type Application } from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import userRouter from "./routes/users";

const app: Application = express();

app.use(express.json());

const swaggerDoc = YAML.load("./src/docs/OpenAPI.yaml");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use("/users", userRouter);

export default app;
