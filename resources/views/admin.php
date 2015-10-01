<!DOCTYPE html>
<html lang="en" ng-app="app" class="no-js {{app.settings.layoutBoxed ? 'boxed' : ''}}">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Slant Admin - Angular</title>
  <meta name="description" content="AngularJs Bootstrap Admin Theme, Angular, Admin, Admin theme">
  <meta name="keywords" content="AngularJS" , "admin", "widgets", "admin panel", "flat ui", "ui", "web app", "app", "backend", "angular", "dashboard", "bootstrap", "charts", "ui kit", "responsive" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon" />
  <!-- Favicon -->
  <!-- CSS FRAMEWORK - START -->
  <link rel='stylesheet' href='libs/styles/loading-bar.min.css' type='text/css' media='all' />
  <!-- Angular Loader -->
  <!--     <link href="../bower_components/font-awesome/css/font-awesome.css" rel="stylesheet" type="text/css" /> -->
  <link href="css/material-icons.css" rel="stylesheet" type="text/css" />
  <link href="libs/styles/animate.min.css" rel="stylesheet" type="text/css" />
  <!-- CSS FRAMEWORK - END -->
  <link rel="stylesheet" href="css/app.css">
</head>

<body ng-controller="AppCtrl" class="{{app.settings.layoutBoxed ? 'boxed' : ''}}">
  <div ui-view></div>
  <!-- JS FRAMEWORK - START -->
  <script src="libs/js/jquery.js" type="text/javascript"></script>
  <!-- Angular Scripts -->
  <script src="libs/js/angular.js"></script>
  <script src="libs/js/angular-animate.js"></script>
  <!--    <script src="libs/angular-cookies/angular-cookies.js"></script>-->
  <!--    <script src="libs/angular-resource/angular-resource.js"></script>-->
  <!--    <script src="libs/angular-sanitize/angular-sanitize.js"></script>-->
  <script src="libs/js/angular-touch.js"></script>
  <script src="libs/js/angular-ui-router.js"></script>
  <!--<script src="libs/ngstorage/ngStorage.js"></script>-->
  <script src="../bower_components/angular-ui-utils/index.js"></script>
  <script src="libs/js/ui-bootstrap-tpls.js"></script>
  <!-- Angular ui bootstrap -->
  <script src="libs/js/ocLazyLoad.js"></script>
  <!-- lazyload -->
  <script type='text/javascript' src='libs/js/loading-bar.js'></script>
  <script src="libs/js/perfect-scrollbar.js" type="text/javascript"></script>
  <script src="libs/js/angular-perfect-scrollbar.js" type="text/javascript"></script>
  <script src="libs/js/angular-inview.js" type="text/javascript"></script>
  <!-- JS FRAMEWORK - END -->
  <!-- App JS - Start -->
  <script src="js/app.js"></script>
  <script src="js/app.config.js"></script>
  <script src="js/app.lazyload.js"></script>
  <script src="js/app.router.js"></script>
  <script src="js/app.main.js"></script>
  <script src="js/services/ui-load.js"></script>
  <script src="js/filters/moment-fromNow.js"></script>
  <script src="js/directives/nganimate.js"></script>
  <script src="js/directives/ui-jq.js"></script>
  <script src="js/directives/ui-module.js"></script>
  <script src="js/directives/ui-nav.js"></script>
  <script src="js/directives/ui-bootstrap.js"></script>
  <script src="js/directives/ui-chatwindow.js"></script>
  <script src="js/directives/ui-sectionbox.js"></script>
  <script src="js/controllers/bootstrap.js"></script>
  <script src="js/controllers/topbar.js"></script>
  <script src="js/controllers/chat.js"></script>
  <!-- App JS - End -->
  <script src='../bower_components/Chart.js/Chart.min.js'></script>
</body>

</html>