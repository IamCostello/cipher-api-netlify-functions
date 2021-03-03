import express from "express";
import serverless from "serverless-http";

import route from "./api/routes/route";

const app = express();
const port = process.env.PORT || 3000;

app.use("/.netlify/functions/api", route);

app.listen(port, () => console.log(`server running on port: ${port}`));

export const handler = serverless(app);
