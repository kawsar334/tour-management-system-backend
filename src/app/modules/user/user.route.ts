import { Router } from "express";
import { userController } from "./user.controller.js";
import express, { NextFunction, Request, Response } from "express";
import { createUserZodSchema, validateRequest } from "./user.validate.js";
import { checkAuth } from "../../middleware/CheckAuth.js";
import { Role } from "./user.interface.js";
const router = Router();



router.post("/register", validateRequest(createUserZodSchema), userController?.createUser);
router.get("/users", checkAuth(Role.ADMIN, Role.SUPER_ADMIN, Role.USER), userController?.getAllUser);
router.patch("/update/:id", checkAuth(...Object.values(Role)), userController?.updateUser);


export const UserRoutes = router;
