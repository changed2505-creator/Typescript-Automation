import express, { type Application } from "express";
import userRouter from "./routes/userRouter";
import YAML from "yamljs";
import swaggerUi from "swagger-ui-express";

const app: Application = express();

app.use(express.json());

const swaggerDoc = YAML.load("./src/docs/OpenAPI_schema.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use("/users", userRouter);

export default app;
