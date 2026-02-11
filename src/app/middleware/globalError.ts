import { NextFunction ,Response, Request} from "express";

export const globalError = (err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).json({
    statusCode: err.statusCode,
    message: err.message,
  });
};
