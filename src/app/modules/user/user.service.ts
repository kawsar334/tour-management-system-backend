import { IUser, Role } from "./user.interface.js";
import { User } from "./user.model.js";
import { IAuthProvider } from "./user.interface.js"
import { AppError } from "../../../utils/AppError.js";
import bcrypt from "bcryptjs";
import { JwtPayload } from "jsonwebtoken";
import { envVars } from "../../config/env.js";


const createUser = async (payload: Partial<IUser>) => {
  const { email, password, ...rest } = payload;
  const isUserExist = await User.findOne({ email });
  if (isUserExist) {
    throw new AppError(409, "User already exists");
  }
  const authProvider: IAuthProvider = { provider: "credentials", providerId: email as string, }
  const hashPassword = await bcrypt.hash(password as string, 10);
  const user = await User.create({
    email,
    password: hashPassword,
    auths: [authProvider],
    ...rest,
  });
  return user;
};

// UPDATE USER INFO 
const updateUser = async (userId: string, payload: Partial<IUser>, decodedToken: JwtPayload) => {
  
  const UserExist = await User.findById(userId);
  if(!UserExist){
     throw new AppError(404, "User not found !");
  }
  if(UserExist.isDeleted ){

    // console.log(UserExist.isDeleted, UserExist.isActive, UserExist?.blocked)
    throw new AppError(404, "User cannot be update!");
  }
  // if (payload.role) {
    
    // if (decodedToken.role === Role.USER || decodedToken.role === Role.GUIDE) {
    //   throw new AppError(404, "access denied ")
    // }
    if (decodedToken.role === Role.SUPER_ADMIN && decodedToken.role === Role.ADMIN) {
      throw new AppError(401, "you are Not authorized !")
    }
    if (payload.isActive || payload.isDeleted || payload.isVerified) {
      throw new AppError(401, "You're not authorized ! ")
    }
    if (payload.password) {
      payload.password = await bcrypt.hash(payload.password, envVars.BCRYPT_SALT_ROUND as string)
    }
    const newUpdateUser = await User.findByIdAndUpdate(userId, payload, { new: true, runValidators: true });
    return newUpdateUser ;
  // }
}


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
  updateUser,
  getAllUser,
};
