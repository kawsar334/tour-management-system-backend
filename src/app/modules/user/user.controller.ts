import express, { NextFunction, Request, Response } from "express";
import { userServices } from "./user.service.js";
import { catchAsync } from "../../../utils/catchAsync.js";
import { sendResponse } from "../../../utils/successResponse.js";

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

const getAllUser =catchAsync( async (req: Request, res: Response, next: NextFunction) => {
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
};
