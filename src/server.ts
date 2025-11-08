


import { Server } from "http";
import app  from "./app.js";
import { envVars } from "./config/env.js";
import mongoose from "mongoose";


let server: Server;



const startServer = async () => {
    try {
        await mongoose.connect(envVars.DB_URL)

        console.log("Connected to DB!!");

        server = app.listen(envVars.PORT, () => {
            console.log(`Server is listening to port ${envVars.PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

startServer();