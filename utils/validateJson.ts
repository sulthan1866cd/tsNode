import User from "../interfaces/user.interface";

export const isUserJSON = (user: User) => {
  if (!user.email) return false;
  if (!user.name) return false;
  if (!user.password) return false;
  if (!user.userId) return false;
  return true;
};
