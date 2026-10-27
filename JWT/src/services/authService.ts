import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const SECRET_KEY = "One-Piece";

export const users = [
  {
    id: 1,
    username: "admin",
    password: bcrypt.hashSync("Qwerty@123", 10),
  },
];

export const createJWT = (userID: number) => {
  return jwt.sign({ userID }, SECRET_KEY, {
    expiresIn: "1h",
  });
};

export const verifyJWT = (token: string) => {
  return jwt.verify(token, SECRET_KEY);
};
