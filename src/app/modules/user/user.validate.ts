import { Role } from "./user.interface.js";
import z, { string, ZodString } from "zod";
import { ZodTypeAny } from "zod";
import express, { NextFunction, Request, Response } from "express";

export const createUserZodSchema = z.object({
  name: z
    .string({ error: "name is required" })
    .min(2, { message: "name should be more than 2 character !" })
    .max(30, { message: "name is too Long . " }),
  email: z.email({ error: "invalid email !" }),
  password: z.string({ error: "password is required !" }).min(4).max(20),

  phone: z.string({ error: "phone number is required !" }),
  address: z.string({ error: "address is required !" }),
});

export const validateRequest =
  (zodSchema: ZodTypeAny) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = await zodSchema.parseAsync(req.body);
      next();
    } catch (err) {
      next(err);
    }
  };
