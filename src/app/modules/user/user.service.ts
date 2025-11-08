import { IUser } from "./user.interface.js";
import { User } from "./user.model.js";

const createUser = async (payload: Partial<IUser>) => {
  const { name, email, ...rest } = payload;
  const isUserExist = await User.findOne({ email });
  const user = await User.create({
    name, email, ...rest
  });
  return user;
};



export const userServices = {
    createUser,

}