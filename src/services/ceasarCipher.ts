import LanguageDetect from "languagedetect";
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

export const getAllCiphers = (text: string) => {
  const ciphers = [];

  for (let i = 0; i < ASCII; i++) {
    ciphers.push(cipher(text, ASCII - i));
  }

  return ciphers;
};

export const crackCipher = (text: string) => {
  const lngDetector = new LanguageDetect();
  lngDetector.setLanguageType("iso2");

  let max = 0;
  let language = "";
  let message = "";

  for (let i = 0; i < ASCII; i++) {
    const decipheredText = cipher(text, ASCII - i);
    const [score] = lngDetector.detect(decipheredText, 1);

    if (score) {
      if (score[1] > max && score[0] !== null) {
        max = score[1];
        language = score[0];
        message = decipheredText;
      }
    }
  }

  return { score: max, language, message };
};
