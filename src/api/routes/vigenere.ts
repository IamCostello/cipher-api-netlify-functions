import { Router } from "express";
import { cipher, decipher } from "../../services/vigenereCipher";

const vigenere = Router();

vigenere.post("/cipher", (req, res, next) => {
  const text = req.body.text;
  const key = req.body.key;

  try {
    const cipheredText = cipher(text, key);
    res.status(200).json({ cipheredText });
  } catch (error) {
    next(error);
  }
});

vigenere.post("/decipher", (req, res, next) => {
  const text = req.body.text;
  const key = req.body.key;

  try {
    const decipheredText = decipher(text, key);
    res.status(200).json({ decipheredText });
  } catch (error) {
    next(error);
  }
});

export default vigenere;
