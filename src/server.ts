import express, { type Request, type Response } from 'express'
import app from "./app.js";
import { Server } from "http";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { envVars } from './config/env.js';
dotenv.config();
let server: Server;

const startServer = async () => {
  try {
    const db=  await mongoose.connect(envVars.DB_URL as string);
    if(db) {
      console.log("Database connected successfully");
    }
    server = app.listen(envVars.PORT, () => {
      console.log(`Server is running on port ${envVars.PORT}`);
    });
  } catch (error) {
    console.log("Error starting server:", error);
  }
};
startServer();
