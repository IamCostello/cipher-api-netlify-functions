import { cipher, decipher } from "../../src/services/vigenereCipher";

describe("Vigenere cipher function within 32-127 ascii table", () => {
  it("Should return correct ciphered text", () => {
    expect(cipher("This is a test msg", "secret")).toBe("gml%%}&%d2yy&y#x{");
  });

  it("Should return correct deciphered text", () => {
    expect(decipher("gml%%}&%d2yy&y#x{", "secret")).toBe("This is a test msg");
  });
});
