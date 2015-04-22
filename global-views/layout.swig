<!DOCTYPE html>
<html lang="en">
<head>
  <title>{{pageTitle}}</title>
  <meta charset="utf-8">
  <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
  <style>
    body {font-family: Verdana, sans-serif; font-size:0.8em;}
    header, nav, section, article, footer
    nav ul {margin:0; padding:0;}
    nav ul li {display:inline; margin:5px;}
    input.username-search {width:70%}
  </style>
  <script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
  <script src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-route.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/async/1.22/async.min.js"></script>
</head>

<body>

  <section>

    <header>
      <h1>GitHub Client</h1>
    </header>

    <nav>
      <ul>
        <li><a href="/">Client App</a></li>
        <li><a href="/docs">Docs</a></li>
      </ul>
    </nav>

  </section>

  {% block body %}
  {% endblock  %}

  <footer>
    <p>&copy; lazlojuly 2015.</p>
  </footer>

</body>
</html>
