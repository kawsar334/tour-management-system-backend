import { IUser } from "./user.interface.js";
import { User } from "./user.model.js";


export const createUserService = async(payload:Partial<IUser>)=>{
   const {name, email} = payload;
    const user = await User.create(payload);
    return user;

};


export const userServices = {
    createUserService
}