gitHubClient.controller('TerminalController',
  ['$http', '$scope', 'ValidationService', 'RepoListService', 'RepoStarsService'
  ,function ($http, $scope, ValidationService, RepoListService, RepoStarsService){

    // Init defaults
    $scope.noReposFound = false;
    $scope.parsedInput = {usersForSearch:[],invalidUsernames:[]};
    $("#username-search-field").focus();


    // Validate input and update search-info as user is typing
    $scope.updateSearchInfo = function(usernames) {

      // Parse username(s) {usersForSearch:[],invalidUsernames:[]};
      $scope.parsedInput = ValidationService.parseUsernames(usernames);

    };


    $scope.performSearch = function() {

      // Reset lists
      $scope.repoList.reset();
      $scope.repoStars.reset();
      $scope.noReposFound = false;

      // Check if search can be performed
      if ($scope.parsedInput.invalidUsernames.length > 0 ||
        $scope.parsedInput.usersForSearch.length === 0)
      {
        return false;
      }

      // If one name is supplied, listing the repositories belonging to that user
      if ($scope.parsedInput.usersForSearch.length === 1)
      {
        // repoList is handling response - only error needs to be caught here
        RepoListService.getUserRepos($scope.parsedInput.usersForSearch[0], function(err, repos) {
          // Quick hack to make this work with the github-proxy
          if (err)
            return $scope.noReposFound = true;
          if(!repos.length || (repos.hasOwnProperty("message") && repos.message === "Not Found"))
            return $scope.noReposFound = true;
        });
      }

      // If two names are supplied, show who has the most stars on their own repos
      if ($scope.parsedInput.usersForSearch.length === 2)
      {
        // repoStars is handling response - only error needs to be caught here
        RepoStarsService.compareUserRepos($scope.parsedInput.usersForSearch, function(err, repos) {
          if (err)
          {
            return $scope.feedBacks.push(
              {type:"error",message:"Sorry, could not retrieve users repositories."}
            );
          }
        });
      }

    };


  }]
);
