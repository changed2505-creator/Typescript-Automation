import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { config } from "../Config/env";

const SECRET_KEY = config.JWT_SECRET;

export const users = [
  {
    id: 1,
    username: "admin",
    password: bcrypt.hashSync("Qwerty@123", 10),
  },
];

export const createJWT = (userID: number) => {
  return jwt.sign({ userID }, SECRET_KEY, {
    expiresIn: config.TOKEN_EXPIRY,
  });
};

export const verifyJWT = (token: string) => {
  return jwt.verify(token, SECRET_KEY);
};
