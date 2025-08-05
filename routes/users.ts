import express, { Router, Request, Response } from "express";
import User from "../interfaces/user.interface";
import { createUser, findAllUsers, findUserById } from "../services/user";
import { isUserExists } from "../controllers/user";
import { isUserJSON } from "../utils/validateJson";
const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const users: User[] = findAllUsers();
  res.json(users);
});

router.get("/:userId", (req: Request, res: Response) => {
  const userId = req.params.userId;
  if (!isUserExists(userId)) {
    return res.status(404).json({ error: "user not found" });
  }
  const user: User | undefined = findUserById(userId);
  res.json(user);
});

router.post("/", (req: Request, res: Response) => {
  const newUser: User = req.body as User;
  if (!isUserJSON(newUser)) {
    return res.status(400).json({ error: "not a user object" });
  }

  if (isUserExists(newUser.userId)) {
    return res.status(409).json({ error: "user already exists" });
  }
  const addedUser: User = createUser(newUser);
  res.status(201).json(addedUser);
});

export default router;
