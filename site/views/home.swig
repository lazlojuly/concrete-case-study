{% extends "../../global-views/layout.swig" %}

{% block body %}
  <section ng-app="gitHubClient">

    <section ng-controller="UserFormController as userFormCtrl">

      <form class="github-username-form" novalidate>
        <label for="username-search-field" class="lead">Username(s):</label>
        <input type="text" class="username-search" maxlength="160" id="username-search-field"
                ng-model="usernames" ng-class="{'invalid-input':invalidUsernames.length}"
                ng-change="updateSearchInfo(usernames)" autocomplete="off"
                placeholder="Type 1 username for repos or 2 usernames (separated by commas) for star fight..."
              />
        <button ng-click="performSearch()" class="btn btn-primary btn-default">
          Submit
        </button>
      </form>

      <div class="search-info">

        <!-- Usernames are valid -->
        <div ng-show="(usersForSearch.length && !invalidUsernames.length)"
          class="usernames-for-search">
          <header ng-show="(usersForSearch.length === 1)" class="lead repo-list-txt">
            Submit form to list the repositories of <kbd>[[(usersForSearch[0])]]</kbd>
          </header>
          <header ng-show="(usersForSearch.length === 2)" class="lead star-fight-txt">
            Submit form for star-fight between
            <kbd>[[(usersForSearch[0])]]</kbd> and <kbd>[[(usersForSearch[1])]]</kbd>
          </header>
        </div>

        <!-- One or more usernames are not valid -->
        <div ng-show="invalidUsernames.length" class="users-for-search invalid-txt" >
          <header class="lead">Invalid usernames(s):</header>
          <ul class="users-for-search list-unstyled list-inline">
            <li ng-repeat="username in invalidUsernames track by $index">[[username]]</li>
          </ul>
        </div>

      </div>

      <i ng-show="repoList.busy" class="fa fa-spinner fa-lg fa-pulse"></i>
      <div infinite-scroll="repoList.nextPage()" infinite-scroll-distance="1"
        ng-show="repoList.repos.length" class="user-repositories"
        ng-class="{'loading':repoList.busy}">
        <ul class="repo-list list-unstyled">
          <li ng-repeat="repo in repoList.repos" class="repo-info">
            <span class="repo-list-name">
              <i class="fa fa-check-square fa-lg"></i>&nbsp;
              <a target="_blank" href="[[repo.html_url]]">
                [[repo.name]] (*[[repo.stargazers_count]])
              </a>
              <i class="fa fa-clock-o fa-fw"></i>
              <span class="small">&nbsp;[[repo.updated_at | date:'medium']]</span>
            </span>
            <p class="repo-desc">[[repo.description]]</p>
            <p class="repo-last-update">
            </p>
          </li>
        </ul>
      </div>

      <i ng-show="repoStars.busy" class="fa fa-spinner fa-lg fa-pulse"></i>
      <div ng-show="repoStars.owners.length" class="user-comparison"
        ng-class="{'loading':repoStars.busy}">
        <ul class="owner-list list-inline">
          <li ng-repeat="owner in repoStars.owners" class="owner-info">
            <div class="thumbnail with-caption">
              <img ng-src="[[owner.avatar_url]]" alt="avatar" width="100"/>
              <a target="_blank" href="[[owner.html_url]]">[[owner.login]]</a>
              <h3 class="total-stars-count">
                <countup startval="0"
                    endval="owner.totalRepoStars"
                    duration="3"
                    decimals="0"
                    options="countup.options">
                </countup> Stars
              </h3>
            </div>
          </li>
        </ul>
      </div>



    </section>

  </section>
{% endblock %}
