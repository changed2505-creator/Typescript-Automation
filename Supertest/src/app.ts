import express, { type Request } from "express";
const app = express();

function getData(req: Request) {
  return req.query.Name || "Nobody";
}

app.get("/Intro", (req, res) => {
  const data = getData(req);
  res.json([{ Introduction: `I am ${data}` }]);
});

app.get("/Intro/:name", (req, res) => {
  //   const data = req.query.name || "Nobody";
  res.json([{ Introduction: `I am ${req.params.name}` }]);
});

app.use(express.json());

app.post("/Intro", (req, res) => {
  const data = getData(req);
  const detail = req.body;
  res.status(201).json([{ Introduction: `I am ${data}` }, { details: detail }]);
});

export default app;
