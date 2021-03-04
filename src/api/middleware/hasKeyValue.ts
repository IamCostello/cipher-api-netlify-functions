import { NextFunction, Request, response, Response } from "express";

export const hasKeyValue = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const key = req.body.key;

  try {
    if (!key) {
      throw new Error("No cipher key provided");
    }

    next();
  } catch (error) {
    next(error);
  }
};
