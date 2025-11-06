import { NextFunction, Request, Response } from 'express';
import { User } from './user.model.js';
import httpStatus from 'http-status-codes';
import { userServices } from './user.service.js';

const createUser = async(req:Request, res:Response, next:NextFunction) => {
    try{
        const {name, email}= req.body;
        const user =await userServices.createUserService({name, email});
        res.status(httpStatus.CREATED).json({
            message:"User created successfully",
            data:user,
        });
    }catch(err:any){
        // console.log("Error creating user:", err.message);
        // res.status(httpStatus.BAD_REQUEST).send("Internal Server Error");
        next(err);
    }
}


export const UserController = {
    createUser,
}