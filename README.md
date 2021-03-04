# cipher-api-netlify-functions
## Ceasar cipher
### POST /.netlify/functions/api/ceasar/cipher
request body
```json
{
	"text": "Text massage to cipher",
	"shift": "2"
}
```
---
```typescript
const cipher = (text: string, shift: number): string => {
  return text
    .split("")
    .map((el) =>
      String.fromCharCode(
        ((getAscii(el) + shift - ASCII_START) % ASCII) + ASCII_START
      )
    )
    .join("");
};
```

### POST /.netlify/functions/api/ceasar/decipher
request body
```json
{
	"text": "Text massage to decipher",
	"shift": "2"
}
```
---
```typescript
const decipher = (text: string, shift: number): string => {
  return cipher(text, ASCII - (shift % ASCII));
};
```

### POST /.netlify/functions/api/ceasar/decipher/all
request body
```json
{
	"text": "Text massage to cipher"
}
```
---
```typescript
const getAllCiphers = (text: string) => {
  const ciphers = [];

  for (let i = 0; i < ASCII; i++) {
    ciphers.push(cipher(text, ASCII - i));
  }

  return ciphers;
};
```

### POST /.netlify/functions/api/ceasar/decipher/crack
request body
```json
{
	"text": "Text massage to decipher"
}
```
---
```typescript
const crackCipher = (text: string) => {
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
```
## Vigenere cipher
### POST /.netlify/functions/api/vigenere/cipher
request body
```json
{
	"text": "Text massage to decipher",
	"key": "secret"
}
```
---
```typescript
const cipher = (text: string, cipherKey: string): string => {
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
```
### POST /.netlify/functions/api/vigenere/decipher
request body
```json
{
	"text": "Text massage to decipher",
	"key": "secret"
}
```
---
```typescript
const decipher = (text: string, key: string): string => {
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
```
