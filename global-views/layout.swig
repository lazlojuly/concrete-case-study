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
  <!-- App styles -->
  <link rel="stylesheet" href="stylesheets/style.css">
  <!-- Lib styles -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <!-- CDN libs -->
  <script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
  <script src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-route.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/async/1.22/async.min.js"></script>
  <!-- Downloaded libs -->
  <script src="js/vendors/countUp.min.js"></script>
  <script src="js/vendors/angular-countUp/angular-countUp.js"></script>
  <script src="js/vendors/ng-infinite-scroll.min.js"></script>
  <!-- App -->
  <script src="js/gh-client/gitHubClient.js"></script>
  <script src="js/gh-client/common/services/repoService.js"></script>
  <script src="js/gh-client/common/services/validationService.js"></script>
  <script src="js/gh-client/common/controllers/mainController.js"></script>
  <script src="js/gh-client/terminal/terminalController.js"></script>
  <script src="js/gh-client/repo-list/repoListService.js"></script>
  <script src="js/gh-client/repo-stars/repoStarsService.js"></script>
</head>

<body>

  <section>
    <header>
      <h1>GitHub Client</h1>
    </header>
  </section>

  {% block body %}
  {% endblock  %}

</body>
</html>
