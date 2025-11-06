
import { model, Schema } from "mongoose";
import { IAuthProvider, IUser, Role } from "./user.interface.js";


const AuthProviderSchema = new Schema<IAuthProvider>({
    provider:{type:String, required:true},
    providerId:{type:String,required:true},
},{versionKey:false, _id:false});

const userSchema = new Schema<IUser>({
    name: { type: String, required: true  },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    phone: { type: String },
    picture: { type: String },
    address: { type: String },
    isDeleted: { type: Boolean, default: false },
    isActive: { type: String, enum: ["ACTIVE", "INACTIVE", "BLOCKED"], default: "ACTIVE" },
    isVerified: { type: Boolean, default: false },
    roles: { type: String, enum: Object.values(Role), default: Role.USER }, 
    auths:[AuthProviderSchema],
})


export const User = model<IUser>("User",userSchema)