import express from "express";

const bookRouter = express.Router();

bookRouter.get("/books", (req, res) => {
  res.send("Get list book");
});

export default bookRouter;
