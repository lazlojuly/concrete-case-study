{% extends "../../global-views/layout.swig" %}

{% block body %}
  <section ng-app="gitHubClient" class="gitHubClient">

    <section ng-controller="MainController">

      <div class="terminal" ng-include="'js/gh-client/terminal/index.html'"></div>

      <div class="repo-list" ng-include="'js/gh-client/repo-list/index.html'"></div>
      <div class="repo-stars" ng-include="'js/gh-client/repo-stars/index.html'"></div>

    </section>

  </section>
{% endblock %}
