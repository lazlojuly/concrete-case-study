/*
  A very light-weight GitHub proxy to make authenticated requests.
  This is needed because only 60 anonymous requests/hour are allowed by default.
  Authenticated calls can make 5000 requests per hour.
*/
var express = require('express');
var router = express.Router();
var https = require('https');
var config = require("../configs/main");

router.get('/users/:username/repos', function(req, res, next) {

  var customHeader = {};
  customHeader["User-Agent"] = "Demo-GitHub-Client";
  customHeader["Accept"] = "application/vnd.github.v3+json";

  var apiOptions = {
    hostname: config.gitHubProxy.host
    ,auth: config.gitHubProxy.username+":"+config.gitHubProxy.password
    ,path: req.url
  	// ,rejectUnauthorized: false
  	// ,agent: false
    ,headers: customHeader
  };

  // Make request to GitHub API with Basic authentication
  var apiRequest = https.get(apiOptions, function(apiRes) {

    apiRes.setEncoding("utf8");

    apiRes.on("data", function(chunk){
      res.write(chunk);
    });

    apiRes.on("end", function(){
      res.end();
    });

  });

  apiRequest.on('error', function(error) {
    console.log(error);
    res.writeHead(500);
    res.end();
  });

  // All requests reaching this proxy end here
  apiRequest.end();
});

module.exports = router;
