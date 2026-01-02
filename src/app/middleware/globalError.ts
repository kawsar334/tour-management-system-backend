import { NextFunction ,Response, Request} from "express";


export const globalError = (err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || "something went wrong !";
  res.status(500).json({
    err,
    status,
    message,
    success: false,
  });
}