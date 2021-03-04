import express from "express";
import serverless from "serverless-http";
import logError from "./api/middleware/logError";
import { hasIllegalCharacters } from "./api/middleware/hasIllegalCharacters";
import { hasKeyValue } from "./api/middleware/hasKeyValue";

import ceasarRoutes from "./api/routes/ceasar";
import vigenereRoutes from "./api/routes/vigenere";

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/.netlify/functions/api/ceasar", [hasIllegalCharacters], ceasarRoutes);
app.use("/.netlify/functions/api/vigenere", [hasKeyValue], vigenereRoutes);

app.use(logError);

app.listen(port, () => console.log(`server running on port: ${port}`));

export const handler = serverless(app);
