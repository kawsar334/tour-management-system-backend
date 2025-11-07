

import { model, Model, Schema } from "mongoose";
import { IAuthProvider, IsActive, IUser, Role } from "./user.interface.js";

const authProviderSchema = new Schema<IAuthProvider>({
    provider:{type:String, required:true},
    providerId:{type:String, required:true}
},{

    versionKey:false,
    _id:false
})

const userSchema = new Schema<IUser>({
    // _id: Types.ObjectId
        name: {
            type:String,
            required:true,
        },
        email: {
            type:String,
            required:true,
            unique:true
        },
        password: {
            type:String,
            required:true,
        },
        phone: {
            type:String,
           
        },
        picture: {
            type:String,
            
        },
        address: {
            type:String,

        },
        isDeleted: {type: Boolean, default: false },
        isActive: {
            type:String,
            enum:Object.values(IsActive),
            default:IsActive.ACTIVE
        },
        isVerified: {type: Boolean, default: false},
        role: {
            type:String,
            enum:Object.values(Role),
            default:Role.USER

        },
        auths: [authProviderSchema],
        bookings: {
            type:String,
        },
        guides: {
            type:String,
        },
        
},{timestamps:true});


export const User = model<IUser>("User", userSchema);