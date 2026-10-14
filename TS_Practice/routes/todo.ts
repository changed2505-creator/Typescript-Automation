import express from "express";
import {
  addTask,
  deleteTask,
  getAllTask,
  getTask,
  updateTask,
} from "../src/data.js";

const router = express.Router();

router.post("/TODO", (req, res) => {
  const getTask = req.body.task;
  const addedTask = addTask(getTask);
  res.json({ Message: "Task Added", newTask: addedTask });
});
router.get("/TODO", (req, res) => {
  const allTasks = getAllTask();
  res.json({ allTasks });
});
router.get("/TODO/:id", (req, res) => {
  const getID = +req.params.id;
  const gotTask = getTask(getID);
  res.json(gotTask);
});
router.patch("/TODO/:id", (req, res) => {
  const changeTask = +req.params.id;
  const changedTask = updateTask(changeTask, req.body.task);
  res.json(changedTask);
});
router.delete("/TODO/:id", (req, res) => {
  const delTask = +req.params.id;
  const updatedTasks = deleteTask(delTask);
  res.json({ updatedTasks });
});
export default router;
