import { Router } from "express";
import {
  cipher,
  crackCipher,
  decipher,
  getAllCiphers,
} from "../../services/ceasarCipher";
import { hasShiftValue } from "../middleware/hasShiftValue";

const ceasar = Router();

ceasar.post("/cipher", hasShiftValue, (req, res, next) => {
  const text = req.body.text;
  const shift = req.body.shift;

  try {
    const cipheredText = cipher(text, shift);
    res.status(200).json({ cipheredText });
  } catch (error) {
    next(error);
  }
});

ceasar.post("/decipher", hasShiftValue, (req, res, next) => {
  const text = req.body.text;
  const shift = req.body.shift;

  try {
    const decipheredText = decipher(text, shift);
    res.status(200).json({ decipheredText });
  } catch (error) {
    next(error);
  }
});

ceasar.post("/decipher/all", (req, res, next) => {
  const text = req.body.text;

  try {
    const possibleCiphers = getAllCiphers(text);
    res.status(200).json({ ciphers: possibleCiphers });
  } catch (error) {
    next(error);
  }
});

ceasar.post("/decipher/crack", (req, res, next) => {
  const text = req.body.text;

  try {
    const possibleCipher = crackCipher(text);
    res.status(200).json({ ...possibleCipher });
  } catch (error) {
    next(error);
  }
});

export default ceasar;
