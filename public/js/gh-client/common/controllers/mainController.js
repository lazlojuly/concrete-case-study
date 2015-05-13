gitHubClient.controller('MainController',
  ['$http', '$scope', 'RepoListService', 'RepoStarsService',
  function ($http, $scope, RepoListService, RepoStarsService){

    // Init defaults
    $scope.repoList = RepoListService;
    $scope.repoStars = RepoStarsService;

  }]
);
