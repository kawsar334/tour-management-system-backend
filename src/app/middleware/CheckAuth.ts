import jwt, { JwtPayload } from "jsonwebtoken";
import express, { NextFunction, Request, Response } from "express";
import { envVars } from "../config/env.js";
import { AppError } from "../../utils/AppError.js";
import { verifiyToken } from "../../utils/jwt.js";

export const checkAuth =
  (...authRoles: string[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization as string;
    console.log(token)
    const role = verifiyToken(token, envVars.SECRETE as string) as JwtPayload;
    if (!token) {
      throw new AppError(401, "No token provided ");
    }
    if (!authRoles.includes(role.role)) {
      throw new AppError(409, "access denied  !");
    }
    next();
  };
