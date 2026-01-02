import express, { NextFunction, Request, Response } from "express";
import { userServices } from "./user.service.js";
import { catchAsync } from "../../../utils/catchAsync.js";
 



const createUser =catchAsync (async (req: Request, res: Response, next:NextFunction) => {
    const user = await userServices.createUser(req.body);
    res.status(201).json(user);
});

const getAllUser = async(req: Request, res: Response, next:NextFunction)=>{
  
    const users = await userServices.getAllUser();
    res.status(200).json({
      message:"user retrive succefully !",
      success:true,
      users,
    })
 

}

export const userController = {
  createUser,
  getAllUser,
};
