import getAscii from "./helpers/getAscii";
import { ASCII, ASCII_START } from "../config/ascii/ascii";

export const cipher = (text: string, shift: number): string => {
  return text
    .split("")
    .map((el) =>
      String.fromCharCode(
        ((getAscii(el) + shift - ASCII_START) % ASCII) + ASCII_START
      )
    )
    .join("");
};

export const decipher = (text: string, shift: number): string => {
  return cipher(text, ASCII - (shift % ASCII));
};
