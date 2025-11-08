// import cors from "cors";
import express,{Request, Response} from "express";
import { router } from "./app/routes/index.js";

const app = express();
// app.use(cors());
app.use(express.json());
app.use("/api/v1", router)

app.get("/",(req:Request,res:Response)=>{
    res.json({message :"hello"})

});

export default app ;