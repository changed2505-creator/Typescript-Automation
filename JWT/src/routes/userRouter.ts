import { Router } from "express";
import { getUser, getUsers, addUser } from "../controller/userControl";
import { aunthentication } from "../middleware/auth";

const router: Router = Router();

router.get("/", aunthentication, getUsers);
router.get("/:id", aunthentication, getUser);
router.post("/", aunthentication, addUser);

export default router;
