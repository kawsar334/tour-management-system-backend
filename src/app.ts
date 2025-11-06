
import cors from 'cors';
import express, { Application, NextFunction, Request, Response }  from 'express';
import { userRoutes } from './modules/user/user.route.js';
import { router } from './routes/index.js';
const app:Application = express();
app.use(express.json());
app.use(cors());
app.use('/api/v1/',router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use((err:any, req:Request, res:Response, next:NextFunction)=>{

    res.status(500).json({
        success:false,
        message:`something went wrong ${err.message}`,
        err,
        stack:err.stack,
    })

})

   
export default app;