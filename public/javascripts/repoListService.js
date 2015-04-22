gitHubClient.factory('RepoListService', function($http, RepoService) {


  var RepoListService = function() { this.setDefaults(); };
  RepoListService.prototype = Object.create(RepoService.prototype);
  RepoListService.prototype.constructor = RepoListService;


  RepoListService.prototype.setDefaults = function() {
    this.repos = [];
    this.busy = false;
    this.username = '';
    // pagination
    this.currentPage = 1;
    this.perPage = 20;
    this.sort = "updated";
    this.lastItemCount = 0; // the repos.count of the latest page
  };


  RepoListService.prototype.getUserRepos = function(username, next) {

    // Init call
    this.busy = true;
    this.username = username;
    var queryParams = {
      page:this.currentPage
      ,per_page:this.perPage
      ,sort:this.sort
    };

    this.getRepos(username, queryParams, function(err, data){
      this.busy = false;
      if (err) return next(err);
      this.repos = this.repos.concat(data);
      this.lastItemCount = data.length;
      return next(null, data);
    }.bind(this));

  };


  RepoListService.prototype.nextPage = function() {

    // Only paginate if we already have some results
    if (!this.repos.length) return;
    // Stop sending requests if last page returned less items than perPage
    if (this.lastItemCount < this.perPage) return;

    // This flag prevents multiple calls whilst loading
    if (this.busy) return;
    this.busy = true;

    // Next page
    this.currentPage++;
    this.getUserRepos(this.username, function(err, data){
      this.busy = false;
    });

  };

  return RepoListService;
});
