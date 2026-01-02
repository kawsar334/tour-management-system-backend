import cors from "cors";
import { User } from "./app/modules/user/user.model.js";
import { userServices } from "./app/modules/user/user.service.js";
import { router } from "./app/routes/index.js";
import express, { NextFunction, Request, Response } from "express";
import { globalError } from "./app/middleware/globalError.js";
import { notFound } from "./app/middleware/Notfound.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", router);

app.use(globalError);


app.use(notFound);

export default app;
