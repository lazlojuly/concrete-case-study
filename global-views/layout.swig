<!DOCTYPE html>
<html lang="en">
<head>
  <title>{{pageTitle}}</title>
  <meta charset="utf-8">
  <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body {font-family: Verdana, sans-serif; font-size:0.8em;text-align:center;}
    .user-repositories {text-align:left;}
    header, nav, section, article, footer
    nav ul {margin:0; padding:0;}
    nav ul li {display:inline; margin:5px;}
    input.username-search {width:70%}
    .user-repositories {width:80%; margin:auto;}
  </style>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
  <script src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-route.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/async/1.22/async.min.js"></script>
  <script src="javascripts/countUp.min.js"></script>
  <script src="javascripts/angular-countUp/angular-countUp.js"></script>
  <script src="javascripts/gitHubClient.js"></script>
  <script src="javascripts/ng-infinite-scroll.min.js"></script>
  <script src="javascripts/repoService.js"></script>
  <script src="javascripts/repoListService.js"></script>
  <script src="javascripts/repoStarsService.js"></script>
</head>

<body>

  <section>

    <header>
      <h1>GitHub Client</h1>
    </header>

    <nav>
      <ul class="list-unstyled">
        <li><i class="fa fa-home fa-lg"></i>&nbsp;<a href="/">App</a></li>
        <li><i class="fa fa-book fa-lg"></i>&nbsp;<a href="/docs">Docs</a></li>
      </ul>
    </nav>

  </section>

  {% block body %}
  {% endblock  %}

</body>
</html>
