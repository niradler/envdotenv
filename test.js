const envdotenv = require(".");
envdotenv.config();
console.log(process.env.TEST_VAR, process.env.TEST_VAR_DEV);
