import AppConfig from "./environment/app.js";
import app from "./routers/index.js";

const config = new AppConfig();
const port = config.port;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
