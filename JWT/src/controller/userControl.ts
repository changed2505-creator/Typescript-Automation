import { type Request, type Response } from "express";
import { valiadtion } from "../validator/userValidator";

let validator: any = valiadtion();

export interface user {
  id: number;
  name: string;
  email?: string;
}

let users: user[] = [
  {
    id: 1,
    name: "Ritish",
    email: "Ritish123@gmail.com",
  },
  {
    id: 2,
    name: "Rohan",
  },
];

export const getUsers = (req: Request, res: Response) => {
  res.json(users);
};

export const getUser = (req: Request, res: Response) => {
  const user = users.find((i) => i.id === Number(req.params.id));
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
};

export const addUser = (req: Request, res: Response) => {
  const newUser: user = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };

  if (!validator(newUser)) {
    return res
      .status(400)
      .json({ error: "Invalid data", details: validator.errors });
  }
  users.push(newUser);
  res.status(201).json(newUser);
};
