import getAscii from "./helpers/getAscii";
import { ASCII, ASCII_START } from "../config/ascii/ascii";

const generateKey = (key: string, length: number) => {
  return key.length < length ? key.padEnd(length, key) : key;
};

export const cipher = (text: string, cipherKey: string): string => {
  const key = generateKey(cipherKey, text.length);
  let cipheredText = "";

  for (let i = 0; i < text.length; i++) {
    cipheredText += String.fromCharCode(
      ((getAscii(text[i]) + getAscii(key[i]) - ASCII_START) % ASCII) +
        ASCII_START
    );
  }

  return cipheredText;
};

export const decipher = (text: string, key: string): string => {
  key = generateKey(key, text.length);
  let decipheredText = "";

  for (let i = 0; i < text.length; i++) {
    decipheredText += String.fromCharCode(
      ((getAscii(text[i]) - (getAscii(key[i]) % ASCII) + ASCII - ASCII_START) %
        ASCII) +
        ASCII_START
    );
  }

  return decipheredText;
};
