import User from "../interfaces/user.interface";
import users from "../utils/user";

export const findAllUsers = () => {
  return users;
};

export const findUserById = (userId: string) => {
  for (const user of users) {
    if (user.userId === userId) {
      return user;
    }
  }
};

export const createUser = (user: User) => {
  const ind = users.push(user) - 1;
  return users[ind];
};
