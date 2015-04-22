gitHubClient.factory('RepoStarsService', function($http, RepoService) {


  var RepoStarsService = function() { this.setDefaults(); };
  RepoStarsService.prototype = Object.create(RepoService.prototype);
  RepoStarsService.prototype.constructor = RepoStarsService;


  RepoStarsService.prototype.setDefaults = function() {
    this.owners = [];
    this.busy = false;
  };


  RepoStarsService.prototype.countStars = function(repos) {
    var count = 0;
    for (var x=0; x<repos.length; x++)
      count += repos[x].stargazers_count;
    return count;
  };


  RepoStarsService.prototype.compareUserRepos = function(usernames, next) {
    this.busy = true;

    var queryParams = {
      page:1
      ,per_page:9999 // Quick hack to make sure we get them all (default is 30)
    };

    // Only two user-repos are compared for now
    var service = this;
    async.parallel([
      this.getRepos.bind(service, usernames[0], queryParams)
      ,this.getRepos.bind(service, usernames[1], queryParams)
    ],
    // Callback on the multiple calls
    function(err, results) {
      service.busy = false;
      if (err) return next(err);

      // Count total stars from all repos
      for (var i=0; i<results.length; i++)
      {
        if(results[i].length) // Only save if has repos - should have queried user first
        {
          // Get first repo for owner information
          var ownerInfo = results[i][0].owner;
          ownerInfo.totalRepoStars = RepoStarsService.prototype.countStars(results[i]);
          // Save owner to array
          service.owners.push(ownerInfo);
        }
      }
    }); // End of parallel

  };


  return RepoStarsService;
});
