/***
Config Loader
- "config-dev" is loaded by default (if no APP_ENV is specified)
- set your own app config eg.: APP_ENV=digital-ocean node bin/www
***/
var environment = process.env.APP_ENV || "dev"
var config = require("./config-"+environment);
module.exports = config;
