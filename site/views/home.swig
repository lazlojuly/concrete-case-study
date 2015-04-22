{% extends "../../global-views/layout.swig" %}

{% block body %}
  <section ng-app="gitHubClient">

    <section ng-controller="UserFormController as userFormCtrl">

      <div class="search-info">

        <!-- Usernames are valid -->
        <div ng-show="(usersForSearch.length && !invalidUsernames.length)"
          class="usernames-for-search">
          <header>Submit form to search for the following usernames(s):</header>
          <ul class="usersname-list">
            <li ng-repeat="username in usersForSearch track by $index" class="search-username">[[username]]</li>
          </ul>
        </div>

        <!-- One or more usernames are not valid -->
        <div ng-show="invalidUsernames.length" class="users-for-search">
          <header>Invalid usernames(s):</header>
          <ul class="users-for-search">
            <li ng-repeat="username in invalidUsernames track by $index">[[username]]</li>
          </ul>
        </div>

      </div>

      <form class="github-username-form" novalidate>
        <label for="username-search-field">Username:</label>
        <input type="text" class="username-search" maxlength="160" id="username-search-field"
                ng-model="usernames" ng-class="{'invalid-input':invalidUsernames.length}"
                ng-change="updateSearchInfo(usernames)"
                placeholder="Type a username for repositories or two usernames (separated by commas) for user comparison..."
              />
        <input type="submit" ng-click="performSearch()" value="Submit" />
      </form>

      <div infinite-scroll="repoList.nextPage()" infinite-scroll-distance="1"
        ng-show="repoList.repos.length" class="user-repositories"
        ng-class="{'loading':repoList.busy}">
        <ul class="repo-list">
          <li ng-repeat="repo in repoList.repos" class="repo-info">
            <span class="repo-list-name">
              <a target="_blank" href="[[repo.html_url]]">[[repo.name]] (*[[repo.stargazers_count]])</a>
            </span>
            <p class="repo-desc">[[repo.description]]</p>
            <p class="repo-last-update">Last updated: [[repo.updated_at | date:'medium']]</p>
          </li>
        </ul>
      </div>

      <div ng-show="repoStars.owners.length" class="user-comparison"
        ng-class="{'loading':repoStars.busy}">
        <ul class="owner-list">
          <li ng-repeat="owner in repoStars.owners" class="owner-info">
            <img ng-src="[[owner.avatar_url]]" alt="avatar" width="50"/>
            <span class="owner-github-profile">
              <a target="_blank" href="[[owner.html_url]]">[[owner.login]]</a>
            </span>
            <p class="total-stars-count">
              <countup startval="0"
                  endval="owner.totalRepoStars"
                  duration="3"
                  decimals="0"
                  options="countup.options">
              </countup> Stars
            </p>
          </li>
        </ul>
      </div>



    </section>

  </section>
{% endblock %}
