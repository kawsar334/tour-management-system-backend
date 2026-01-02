import { NextFunction ,Response, Request} from "express";

export const notFound = (req:Request,res:Response)=>{
  res.status(500).json({
    message:"Route Not found "
  })
}