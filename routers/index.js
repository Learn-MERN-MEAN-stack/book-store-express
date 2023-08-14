import express from "express";
import bookRouter from "./book.js";

const app = express();

app.use(bookRouter);

export default app;
