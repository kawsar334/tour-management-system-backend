import {Server} from "http" ;
import express, { Application, Request, Response }  from 'express';
import app from "./app.js" ;
import mongoose  from "mongoose";
import dotenv from "dotenv" ;
import { envVars } from "./config/env.js";

dotenv.config();
const url:string =envVars.DB_URL || "mongodb://localhost:27017/todo" ;
let server :Server  ;


let port =envVars.PORT  ;

const startServer = async()=>{
    try{
        const db=  await mongoose.connect(url);
        server = app.listen(port,()=>{
            console.log(`Server is running on port ${port} and database connected`);
        })
    }
    catch(err){
        console.log("Error starting server:", err);
    }

    
}

startServer();


