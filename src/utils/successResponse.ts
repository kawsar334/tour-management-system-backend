import { Response } from "express";

interface Tmeta {
    total:number 
}


interface Tresponse <T>{
    statuscode:number;
    succes:boolean;
    data:T;
    meta?:Tmeta
}


const sendResponse =<T>(res:Response, data:Tresponse<T>)=>{
    
}