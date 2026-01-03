import { Router } from "express";
import { userController } from "./user.controller.js";
import z, { string, ZodString } from "zod";
import express, { NextFunction, Request, Response } from "express";
import { createUserZodSchema, validateRequest } from "./user.validate.js";
import { ZodTypeAny } from "zod";
const router = Router();

 
router.post("/register",validateRequest(createUserZodSchema),userController?.createUser);
router.get("/users", userController?.getAllUser);

export const UserRoutes = router;
