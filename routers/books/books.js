import express from "express";
import bookValidators from "./books-validators.js";
import { validationResult, matchedData } from "express-validator";

const bookRouter = express.Router();

// Get list books
bookRouter.get("/", (req, res) => {
  res.send([]);
});

// Get book detail
bookRouter.get("/:bookId", (req, res) => {
  res.send({
    params: req.params,
    query: req.query,
  });
});

// Post new book
bookRouter.post("/", bookValidators.postBook(), (req, res) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    const data = matchedData(req);
    return res.send(data);
  }
  res.send({ errors: result.array() });
});

export default bookRouter;
