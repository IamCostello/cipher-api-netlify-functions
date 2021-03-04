import { ASCII_END, ASCII_START } from "../../config/ascii/ascii";
import getAscii from "./getAscii";

export const hasIllegalChars = (text: string) => {
  for (let i = 0; i < text.length; i++) {
    const asciiValue = getAscii(text[i]);
    if (asciiValue < ASCII_START || asciiValue > ASCII_END) {
      return true;
    }
  }

  return false;
};
