const express = require("express");
const app = express();
const appConfig = require("./environment/app");
const config = new appConfig();
const port = config.port;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
