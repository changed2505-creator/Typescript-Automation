import { Router } from "express";
import { login } from "../controller/authControl";

const router = Router();

router.post("/login", login);

export default router;
