import * as path from "path";
import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

import bookRouter from "./books/books.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// static folder is public
app.use("/static", express.static(path.join(__dirname, "../public")));

// Routers
app.use("/books", bookRouter);

export default app;
