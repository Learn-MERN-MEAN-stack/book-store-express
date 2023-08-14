import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const configPathFile = path.join(__dirname, "../public/assets/app.config.json");

export default class AppConfig {
  production = false;
  port = 3000;

  constructor() {
    const config = JSON.parse(fs.readFileSync(configPathFile));
    this.production = config.production || this.production;
    if (this.production) {
      this.port = config.productionConfig.port || this.port;
    } else {
      this.port = config.developmentConfig.port || this.port;
    }
  }
}
