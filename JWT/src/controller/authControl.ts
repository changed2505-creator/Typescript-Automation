import { createJWT, users } from "../services/authService";
import bcrypt from "bcryptjs";
import type { Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);
  if (!user) {
    return res.status(401).json({
      error: `Invalid credentials ${username}`,
    });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({
      error: `Invalid credentials ${password}`,
    });
  }

  const token = createJWT(user.id);
  res.json({ token });
};
