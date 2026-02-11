import { Server } from "http";
import app from "./app.js";
import { envVars } from "./app/config/env.js";
import mongoose from "mongoose";
import { seedSuperAdmin } from "./utils/seedSuperAdmin.js";

let server: Server;

const startServer = async () => {
  try {
    server = app.listen(envVars.PORT, () => {
      console.log(`SERVER LISTENING ON PORT >>>><<<< ${envVars.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};


(async () => {
  try {
    await mongoose.connect(envVars.DB_URL,{
      
    });
    console.log("CONNECTED TO DATABASE !!");
    await seedSuperAdmin();
    await startServer();
  } catch (error) {
    console.log(error)
    console.error("Startup failed:", error);
    process.exit(1); 
  }
})();
