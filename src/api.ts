import express from "express";
import serverless from "serverless-http";
import logError from "./api/middleware/logError";
import { hasIllegalCharacters } from "./api/middleware/hasIllegalCharacters";

import route from "./api/routes/route";

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/.netlify/functions/api", hasIllegalCharacters, route);

app.use(logError);

app.listen(port, () => console.log(`server running on port: ${port}`));

export const handler = serverless(app);
