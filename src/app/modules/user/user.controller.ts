import express,{Request, Response} from "express";
import { userServices } from "./user.service.js";

const createUser = async(req:Request, res:Response)=>{
    try{
        const user = await userServices.createUser(req.body);
        
        
    }catch(err){
        console.log(err)
    }

}


export const userController = {
    createUser,
}