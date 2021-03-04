import express from "express";
import serverless from "serverless-http";
import logError from "./api/middleware/logError";
import { hasIllegalCharacters } from "./api/middleware/hasIllegalCharacters";
import { hasShiftValue } from "./api/middleware/hasShiftValue";

import ceasarRoutes from "./api/routes/ceasar";

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/.netlify/functions/api/ceasar", [hasIllegalCharacters], ceasarRoutes);

app.use(logError);

app.listen(port, () => console.log(`server running on port: ${port}`));

export const handler = serverless(app);
