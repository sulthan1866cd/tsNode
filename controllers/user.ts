import User from "../interfaces/user.interface";
import { findAllUsers } from "../services/user";

export const isUserExists = (userId: string) => {
  const users: User[] = findAllUsers();
  for (const user of users) {
    if (user.userId === userId) return true;
  }
  return false;
};


