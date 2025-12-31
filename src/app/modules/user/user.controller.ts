import express, { Request, Response } from "express";
import { userServices } from "./user.service.js";
import { User } from "./user.model.js";

const createUser = async (req: Request, res: Response) => {
  try {
    
    const user = new  User(req.body);
    const save = await user.save()
    // const user = await userServices.createUser(req.body);
    res.status(201).json(user);
    console.log(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const userController = {
  createUser,
};
