// Base class for RepoListService, RepoStarsService etc.
gitHubClient.factory('RepoService', function($http) {

  var RepoService = function() {};

  RepoService.prototype.getRepos = function(username, queryParams, next) {

    var request = {
      method:"GET"
      ,url:"/github-proxy/users/"+username+"/repos"
    };
    if (queryParams !== undefined && !$.isEmptyObject(queryParams))
      request.params = queryParams;

    $http(request)
      .success(function(data, status, headers, config) {
        // Quick hack to make this work with the github-proxy
        if (data.hasOwnProperty("message") && data.message === "Not Found")
          return next("404");
        return next(null, data);
      }.bind(this))
      .error(function(data, status, headers, config) {
        this.busy = false;
        return next(status);
      }.bind(this));

  };

  return RepoService;
});
