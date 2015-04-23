// Init Angular app
var gitHubClient = angular.module('gitHubClient',
  ["ngRoute","infinite-scroll","countUp"]);

// Example controller
gitHubClient.controller('UserFormController',
  ['$http', '$scope', '$route', '$routeParams', '$rootScope', 'RepoListService',
  'RepoStarsService',
  function ($http, $scope, $route, $routeParams, $rootScope, RepoListService,
    RepoStarsService){

    // Init defaults
    $scope.feedBacks = []; // Simple feedback messages TODO
    $scope.usersForSearch = [];
    $scope.invalidUsernames = [];
    // Service for managing user repository list
    $scope.repoList = new RepoListService();
    // Service for managing repo stars comparison
    $scope.repoStars = new RepoStarsService();
    // Countup for stars
    $scope.countup = {
    // default options
      options: {
        useEasing : true,
        useGrouping : true,
        separator : ',',
        decimal : '.'
      }
    };
    $("#username-search-field").focus();


    $scope.performSearch = function(){
      // Clear repoList and chart
      $scope.repoList.setDefaults();
      $scope.repoStars.setDefaults();
      $scope.noReposFound = false;

      if ($scope.invalidUsernames.length > 0 || $scope.usersForSearch.length === 0)
        return false;

      // If one name is supplied, listing the repositories belonging to that user
      if ($scope.usersForSearch.length === 1)
      {
        // repoList is handling response - only error needs to be caught here
        $scope.repoList.getUserRepos($scope.usersForSearch[0], function(err, repos) {
          // Quick hack to make this work with the github-proxy
          if (err)
            return $scope.noReposFound = true;
          if(!repos.length || (repos.hasOwnProperty("message") && repos.message === "Not Found"))
            return $scope.noReposFound = true;
        });
      }

      // If two names are supplied, show who has the most stars on their own repos
      if ($scope.usersForSearch.length === 2)
      {
        // repoStars is handling response - only error needs to be caught here
        $scope.repoStars.compareUserRepos($scope.usersForSearch, function(err, repos) {
          if (err)
          {
            return $scope.feedBacks.push(
              {type:"error",message:"Sorry, could not retrieve users repositories."}
            );
          }
        });
      }
    };


    $scope.updateSearchInfo = function(usernames) {
      // Reset
      $scope.usersForSearch = [];
      $scope.invalidUsernames = [];

      // Ignore empty arr
      if (!usernames.length) return;

      // Split by commas
      var aUsers = usernames.split(",");

      // Validate and store user(s) for search
      for(var x=0;x<aUsers.length;x++)
      {
        var name = $.trim(aUsers[x]);
        if (name === "") continue; // Ignore empty strings (eg.:user1,,,user3,,user4,)
        if (!validateUsername(name)) {
          $scope.invalidUsernames.push(name);
        } else {
          $scope.usersForSearch.push(name);
        }
      }
    };


    var validateUsername = function(username) {
      if (username.length === 0 || username.length > 39)
        return false;

      // eg.: https://github.com/- (Dash O'Pepper)
      if (username.length === 1)
      {
        var regex = /[A-Za-z0-9-]/;
        return regex.test(username);
      }

      /* Username may only contain alphanumeric characters or
      single hyphens, and cannot begin or end with a hyphen */
      if (username.length > 1)
      {
        var regex = /^[A-Za-z0-9]+(-[A-Za-z0-9]+)*$/;
        return regex.test(username);
      }

      // All passed OK
      return true;
    };

  }]
);


// Both swig and angular use {{}}
gitHubClient.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});
