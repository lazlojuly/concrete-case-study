// A factory service to share
gitHubClient.service('ValidationService', function() {

  this.parseUsernames = function (usernames) {

    var parseRes = {
      invalidUsernames:[]
      ,usersForSearch:[]
    };

    // Ignore empty arr
    if (!usernames.length) return parseRes;

    // Split by commas
    var aUsers = usernames.split(",");

    // Validate and store user(s) for search
    for(var x=0;x<aUsers.length;x++)
    {
      var name = $.trim(aUsers[x]);
      if (name === "") continue; // Ignore empty strings (eg.:user1,,,user3,,user4,)
      if (!this.validateUsername(name)) {
        parseRes.invalidUsernames.push(name);
      } else {
        parseRes.usersForSearch.push(name);
      }
    }

    return parseRes;
  };


  this.validateUsername = function(username) {
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


});
