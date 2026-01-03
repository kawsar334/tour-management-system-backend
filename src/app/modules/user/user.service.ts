import { IUser } from "./user.interface.js";
import { User } from "./user.model.js";
import {IAuthProvider} from "./user.interface.js"
import { AppError } from "../../../utils/AppError.js";
import bcrypt from "bcryptjs";
const createUser = async (payload: Partial<IUser>) => {
  const { email,password, ...rest } = payload;
  const isUserExist = await User.findOne({ email });
  if(isUserExist){
   throw new AppError(409, "User already exists");
  }
  const authProvider:IAuthProvider = {provider:"credentials",providerId:email as string,} 
  const hashPassword = await bcrypt.hash(password as string,10) ;
  const user = await User.create({
    email,
    password:hashPassword,  
    auths:[authProvider], 
    ...rest,
  });
  return user;


};

const getAllUser = async () => {
  const users = await User.find();
  const totalUser = await User.countDocuments();

  return {
    data: users,
    meta: {
      total: totalUser,
    },
  };
};

export const userServices = {
  createUser,
  getAllUser,
};
