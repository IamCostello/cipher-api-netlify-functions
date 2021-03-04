import { NextFunction, Request, response, Response } from "express";
import { hasIllegalChars } from "../../services/helpers/hasIllegalCharacters";

export const hasIllegalCharacters = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const text = req.body.text;

  try {
    if (!text) {
      throw new Error("No text message to cipher");
    }

    if (hasIllegalChars(text)) {
      throw new Error(
        "Text massage includes ascii characters out of 32-127 range"
      );
    }

    next();
  } catch (error) {
    next(error);
  }
};
