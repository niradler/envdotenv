# envdotenv

base on dotenv package, adding the support for different environment.

## Setup

```
npm i envdotenv
```

```
require('envdotenv').config()
```

# Example

for example lets look on the demo in the [repo](https://github.com/niradler/envdotenv).

```
//.env
TEST_VAR_DEV=im in .env file
TEST_VAR=im in .env file
```

```
//.env.dev
TEST_VAR_DEV=im in .env.dev file
```

```
//test.js
//NODE_ENV=dev
const envdotenv = require("envdotenv");
envdotenv.config();
console.log(process.env.TEST_VAR, process.env.TEST_VAR_DEV);
```

output:

```
im in .env file im in .env.dev file
```

[dotenv LICENSE](https://github.com/motdotla/dotenv/blob/master/LICENSE)
