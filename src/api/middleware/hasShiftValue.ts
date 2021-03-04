import { NextFunction, Request, response, Response } from "express";

export const hasShiftValue = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const shift = req.body.shift;

  try {
    if (!shift) {
      throw new Error("No cipher shift provided");
    }

    next();
  } catch (error) {
    next(error);
  }
};
