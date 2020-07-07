const fs = require("fs");
const dotenv = require("dotenv");

function config() {
  const { NODE_ENV } = process.env;
  if (NODE_ENV) {
    const fileName = ".env." + NODE_ENV;

    const envConfig = dotenv.parse(fs.readFileSync(fileName));
    for (const k in envConfig) {
      process.env[k] = process.env[k] ? process.env[k] : envConfig[k];
    }
  }

  dotenv.config();
}

module.exports = { config };
