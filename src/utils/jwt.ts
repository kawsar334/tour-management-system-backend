import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";




export const generateToken = (payload:JwtPayload,secrete:string,expiresIn :string)=>{
    const token = jwt.sign(payload,secrete,{
        expiresIn
    } as SignOptions);
    return token ;
};

export const verifiyToken = (token:string, secrete:string)=>{
    const verfiedToken = jwt.verify(token,secrete);
    return verfiedToken;
}