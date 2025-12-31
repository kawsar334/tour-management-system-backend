// import cors from "cors";
import { User } from "./app/modules/user/user.model.js";
import { router } from "./app/routes/index.js";
import express, { Request, Response } from "express";
const app = express();
app.use(express.json())
// app.use(cors());
app.use("/api/v1", router)

app.post("/", async (req: Request, res: Response) => {

    try {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, user });

    } catch (err) {
    res.status(400).json({ success: false, error: err });
  }
});


export default app ;