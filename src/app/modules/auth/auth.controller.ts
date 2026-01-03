import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../../utils/catchAsync.js";
import { authServices } from "./auth.service.js";
import { sendResponse } from "../../../utils/successResponse.js";

const login = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {

    const userInfo = await authServices.credentialsLogin(req.body);
   sendResponse(res, {
        statuscode: 200,
        succes: true,
        message: "User Logged in successfully",
        data: userInfo ,
      });
    
  }
);


export  const credentialsLogin= {
    login 
}


