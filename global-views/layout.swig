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
  </style>
</head>

<body>

  <section>

    <header>
      <h1>GitHub Client</h1>
    </header>

    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
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
