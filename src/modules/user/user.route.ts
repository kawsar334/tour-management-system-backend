import { UserController } from "./user.controller.js";

import express from "express";

const router = express.Router();
router.post("/register", UserController.createUser);


export const userRoutes=router;
