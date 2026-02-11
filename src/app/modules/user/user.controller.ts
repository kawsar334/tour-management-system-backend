import express, { NextFunction, Request, Response } from "express";
import { userServices } from "./user.service.js";
import { catchAsync } from "../../../utils/catchAsync.js";
import { sendResponse } from "../../../utils/successResponse.js";
import { verifiyToken } from "../../../utils/jwt.js";
import { envVars } from "../../config/env.js";
import { JwtPayload } from "jsonwebtoken";

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await userServices.createUser(req.body);
    sendResponse(res, {
      statuscode: 201,
      succes: true,
      message: "User created  successfully",
      data: user,
    });
  }
);

// const updateUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

//   const userId = req.params.id as string;
//   const token = req.headers.authorization as string;
//   const decodedToken = verifiyToken(token, envVars.SECRETE as string) as JwtPayload
//   const user = userServices.updateUser(userId, req.body, decodedToken);
//   sendResponse(res, {
//     statuscode: 201,
//     succes: true,
//     message: "User updated successflly",
//     data: user
//   })
// })

const updateUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.id as string;
  const token = req.headers.authorization as string;
  const decodedToken = verifiyToken(token, envVars.SECRETE as string) as JwtPayload
  const user = await userServices.updateUser(userId, req.body, decodedToken);

  sendResponse(res, {
    statuscode: 201,
    succes: true,
    message: "User updated successflly",
    data: user
  })
}
);


const getAllUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const users = await userServices.getAllUser();
  sendResponse(res, {
    statuscode: 200,
    succes: true,
    message: "Users retrieved successfully! ",
    data: users,

  });
});

export const userController = {
  createUser,
  getAllUser,
  updateUser,
};
