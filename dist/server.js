import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
let server;
const startServer = async () => {
    try {
        const db = await mongoose.connect(process.env.DB_URL);
        if (db) {
            console.log("Database connected successfully");
        }
        server = app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    }
    catch (error) {
        console.log("Error starting server:", error);
    }
};
startServer();
//# sourceMappingURL=server.js.map