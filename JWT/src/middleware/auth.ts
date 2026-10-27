import { verifyJWT } from "../services/authService";
import type { Request, Response, NextFunction } from "express";

export const aunthentication = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHead = req.headers.authorization;
  if (!authHead) {
    return res.status(401).json({ error: `auth required!!` });
  }

  const token = authHead.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: `Token required!!` });
  }

  try {
    const getPayload = verifyJWT(token);
    (req as any).user = getPayload;
    next();
  } catch {
    return res.status(403).json({
      error: `Invalid token`,
    });
  }
};
