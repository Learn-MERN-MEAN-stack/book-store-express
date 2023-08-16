import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const configPathFile = path.join(__dirname, "../public/assets/app.config.json");

dotenv.config();

export default class AppConfig {
  port = 3000;

  constructor() {
    const env = process.env;
    const config = JSON.parse(fs.readFileSync(configPathFile));
    this.port = env.PORT || config.port || this.port;
  }
}
