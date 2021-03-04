import { cipher, decipher } from "../../src/services/ceasarCipher";

describe("Ceasar cipher function within 32-127 ascii table", () => {
  it("Should return correct ciphered text", () => {
    expect(cipher("This is a test msg", 222)).toEqual("r&'1>'1>>2#12>+1%");
  });

  it("Should return correct deciphered text", () => {
    expect(decipher("r&'1>'1>>2#12>+1%", 222)).toEqual("This is a test msg");
  });
});
