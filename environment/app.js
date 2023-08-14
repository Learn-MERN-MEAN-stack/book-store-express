const fs = require("fs");
const path = require("path");
const configPathFile = path.join(__dirname, "../public/assets/app.config.json");

class AppConfig {
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

module.exports = AppConfig;
