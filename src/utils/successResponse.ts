import { Response } from "express";

interface Tmeta {
    total:number 
}


interface Tresponse <T>{
    statuscode:number;
    succes:boolean;
    message:string
    data:T;
    meta?:Tmeta; 

}


export const sendResponse =<T>(res:Response, data:Tresponse<T>)=>{
   return  res.status(200).json({
        succes:data.succes,
        statuscode:data.statuscode,
        message:data.message,
        data:data.data,
        meta:data.meta,

    })
}