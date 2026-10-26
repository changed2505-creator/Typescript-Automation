import { Router } from "express";
import { getUser, getUsers, addUser } from "../controller/userControl";

const router: Router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", addUser);

export default router;
