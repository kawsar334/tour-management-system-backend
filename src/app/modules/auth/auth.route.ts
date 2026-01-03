


import { Router } from "express";
import { credentialsLogin } from "./auth.controller.js";
const router = Router();


router.post("/login",credentialsLogin.login)
export const authRoute = router;


