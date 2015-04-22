{% extends "../../global-views/layout.swig" %}

{% block body %}
  <section>

    <section ng-controller="UserFormController as userFormCtrl">

      <div class="search-info">
      </div>

      <form class="github-username-form" novalidate>
        Name: <input type="text" class="username-search" maxlength="160"
                ng-model="usernames"
                placeholder="Type a username for repositories or two usernames (separated by commas) for user comparison..."
              />
        <input type="submit" ng-click="performSearch()" value="Submit" />
      </form>

    </section>

  </section>
{% endblock %}
