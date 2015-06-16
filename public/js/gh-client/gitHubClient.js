'use strict';

// Init Angular app
var gitHubClient = angular.module('gitHubClient',
  ["ngRoute","infinite-scroll","countUp"]);

// Both swig and angular use {{}}
gitHubClient.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});
