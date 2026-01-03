import bcrypt from "bcryptjs";
import { AppError } from "../../../utils/AppError.js";
import { IUser } from "../user/user.interface.js";
import { User } from "../user/user.model.js";



const credentialsLogin = async(payload:Partial<IUser>)=>{
const {email, password, ...others} = payload;
    const isUserExist = await User.findOne({email});

    if(!isUserExist){
      throw new  AppError(409,"user dosen't exist ");
    };
    const isMatch = await bcrypt.compare(password as string, isUserExist.password as string);
    if(!isMatch){
        throw new AppError(400, "invalid credentials  !")
    };
    

    return {
        email,
        others , 

    }

}


 export const authServices = {
    credentialsLogin,
}