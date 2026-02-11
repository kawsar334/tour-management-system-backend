import { envVars } from "../app/config/env.js";
import { User } from "../app/modules/user/user.model.js";
import express, { NextFunction, Request, Response } from "express";
import { AppError } from "./AppError.js";
import bcrypt from "bcryptjs";
import {
  IAuthProvider,
  IUser,
  Role,
} from "../app/modules/user/user.interface.js";
import { generateToken } from "./jwt.js";
export const seedSuperAdmin = async () => {
    
  try {
    const isSuperAdminExist = await User.findOne({
      email: envVars.SUPERADMIN_EMAIL,
    });
    if (isSuperAdminExist) {
      console.log("SUPER ADMIN CREATED !");
      return;
    }
    const authProvider: IAuthProvider = {
      provider: "credentials",
      providerId: envVars.SUPERADMIN_EMAIL as string,
    };
    const hashPassword = await bcrypt.hash(
      envVars.SUPERADMIN_PASSWORD as string,
      Number(envVars.BCRYPT_SALT_ROUND)
    );
    const payload: IUser = {
      name: "Super Admin",
      role: Role.SUPER_ADMIN,
      email: envVars.SUPERADMIN_EMAIL as string,
      password: hashPassword,
      auths: [authProvider],
    };

    const user = await User.create(payload);
    // const jwtInfo = {
    //   userId: user._id,
    //   email: user.email,
    //   role: user.role,
    // };
    // const accessToken = generateToken(jwtInfo, envVars.SECRETE as string, "1d");
    // console.log(accessToken)
    return user;
  } catch (err) {
    console.log(err);
  }
};
