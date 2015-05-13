var config = {};
config.express = { port:3002 };
config.gitHubProxy = {
  host:"api.github.com"
  ,username:process.env.GITHUB_USER
  ,password:process.env.GITHUB_PASSWD
};
module.exports = config;
