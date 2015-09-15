var app = angular.module("buymore", ['ui.router', 'restangular', 'smart-table',
  'chart.js', 'textAngular', 'angularMoment', 'ui.bootstrap',
  'highcharts-ng'
]);

app.config(function(RestangularProvider) {
  // RestangularProvider.setBaseUrl('http://new.buymore.co.ke');
  //  RestangularProvider.setRequestSuffix('.json');
});


app.run(['$http', '$rootScope', function($http, $rootScope) {
  $rootScope.date = new Date();
  $rootScope.title = 'Anwani';
  $rootScope.messages = [];
  $rootScope.menu = [];
}]);
;// I control the main demo.
app.controller("accountCtrl", ['$scope', '$filter', '$timeout', '$state',
  'Restangular', '$http', '$rootScope',
  function(scope, filter, timeout, state, Restangular, $http, rootScope) {}
]);
;// I control the main demo.
app.controller("accountCtrl", ['$scope', '$filter', '$timeout', '$state',
  'Restangular', '$http', '$rootScope',
  function(scope, filter, timeout, state, Restangular, $http, rootScope) {}
]);
;app.directive('isActiveNav', ['$location', function($location) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      scope.location = $location;
      scope.$watch('location.path()', function(currentPath) {
        if ('#' + currentPath == element[0].hash) {
          element.parent().addClass('active');
        } else {
          element.parent().removeClass('active');
        }
      });
    }
  };
}]);

app.directive('isActiveLink', ['$location', function($location) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      scope.location = $location;
      scope.$watch('location.path()', function(currentPath) {
        if ('#' + currentPath == element[0].hash) {
          element.addClass('active');
        } else {
          element.removeClass('active');
        }
      });
    }
  };
}]);
;app.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /state1
  /**
   * Default Route
   * @param  {[type]} "/account/expenditure" [description]
   * @return {[type]}                        [description]
   */
  $urlRouterProvider.otherwise("/home");

  // Now set up the states
  /**
   * [state description]
   * @param  {[type]} 'test'       [description]
   * @param  {[type]} {                                                            url: '/test' [description]
   * @param  {[type]} views:       {                                                                          '':           {        controller: 'publicCtrl' [description]
   * @param  {[type]} templateUrl: 'app/partials/public/index.html' [description]
   * @param  {[type]} }                                                            }            }             [description]
   * @return {[type]}              [description]
   */
  $stateProvider.state('test', {
      url: '/test',
      views: {
        '': {
          controller: 'publicCtrl',
          templateUrl: 'app/partials/test/index.html',
        }
      }
    })
    .state('home', {
      url: '/home',
      views: {
        '': {
          controller: '',
          templateUrl: 'app/partials/home/index.html',
        },
        'header@home': {
          controller: '',
          templateUrl: 'app/partials/home/header.html',
        },
        'features@home': {
          controller: '',
          templateUrl: 'app/partials/home/features.html',
        },
        'footer@home': {
          controller: '',
          templateUrl: 'app/partials/home/footer.html',
        },
        'banner@home': {
          controller: '',
          templateUrl: 'app/partials/home/banner.html',
        },
        'sub-header@home': {
          controller: '',
          templateUrl: 'app/partials/home/sub-header.html',
        },
        'partners@home': {
          controller: '',
          templateUrl: 'app/partials/home/partners.html',
        }
      }
    })
    .state('login', {
      url: '/login',
      views: {
        '': {
          controller: 'accountCtrl',
          templateUrl: 'app/partials/account/login.html',
        }
      }
    });
});
;angular.module('templates-dist', ['../public/app/partials/account/index.html', '../public/app/partials/account/login.html', '../public/app/partials/home/about.html', '../public/app/partials/home/banner.html', '../public/app/partials/home/features.html', '../public/app/partials/home/footer.html', '../public/app/partials/home/header.html', '../public/app/partials/home/index.html', '../public/app/partials/home/partners.html', '../public/app/partials/home/sub-header.html', '../public/app/partials/test/index.html']);

angular.module("../public/app/partials/account/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/index.html",
    "");
}]);

angular.module("../public/app/partials/account/login.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/login.html",
    "<div class=\"full content\">\n" +
    "  <form action=\"\" class=\"ui form\" class=\"left-form\" id=\"login\">\n" +
    "    <h3 class=\"ui header\">\n" +
    "      Login\n" +
    "    </h3>\n" +
    "    <div class=\"inner\">\n" +
    "    <div class=\"ui input\">\n" +
    "      <label for=\"\">Username</label>\n" +
    "      <input type=\"text\" placeholder=\"John Doe\">\n" +
    "    </div>\n" +
    "    <div class=\"ui input\">\n" +
    "      <label for=\"\">Password</label>\n" +
    "      <input type=\"password\" placeholder=\"Enter Password Here...\">\n" +
    "    </div>\n" +
    "    <div class=\"ui green button\">Login</div>\n" +
    "      </div>\n" +
    "\n" +
    "  </form>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/home/about.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/home/about.html",
    "");
}]);

angular.module("../public/app/partials/home/banner.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/home/banner.html",
    "");
}]);

angular.module("../public/app/partials/home/features.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/home/features.html",
    "<div class=\"row gray padded\">\n" +
    "  <div class=\"col-md-12\">\n" +
    "    <h3>Anwani Features in detail</h3>\n" +
    "    <h4 class=\"gray\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h4>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-4\" style=\"padding-top:30px\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <h4>Create Address</h4>\n" +
    "      <div class=\"col-xs-2\"><i class=\"fa fa-plus-square\"></i></div>\n" +
    "      <div class=\"col-xs-10 gray-text centered\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quis eos hic. Accusantium, asperiores, hic! Consectetur repellat quos est recusandae modi expedita obcaecati beatae enim. Error esse deleniti possimus obcaecati.</div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <h4>View Existing Address</h4>\n" +
    "      <div class=\"col-xs-2\"><i></i></div>\n" +
    "      <div class=\"col-xs-10 gray-text centered\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur voluptas rerum at quaerat placeat! Officia perspiciatis sint voluptates, minima eius sunt. A  dipisci nulla ut magnam illum et soluta optio autem.</div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <h4>Manage Address</h4>\n" +
    "      <div class=\"col-xs-2\"><i ></i></div>\n" +
    "      <div class=\"col-xs-10 gray-text centered\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, hic dignissimos eveniet amet quisquam ad dolorem   voluptates iste, dicta incidunt error dolore quas magnam rerum odit quis repellat cupiditate recusandae!</div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-4\">\n" +
    "<img src=\"images/phone_image.png\" alt=\"\" class=\"img-responsive\" style=\"width:100%\">\n" +
    "<p class=\"gray-text centered\">* Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-4\" style=\"padding-top:30px\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <h4>User & Share Address</h4>\n" +
    "      <div class=\"col-xs-2\"><i class=\"fa fa-reply-all\"></i></div>\n" +
    "      <div class=\"col-xs-10 gray-text centered\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit deleniti odio ab sint labore asperiores, culpa maiores esse cumque, ducimus rerum et provident quasi. Sint soluta ut reprehenderit, aspernatur libero.</div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <h4>Add Locational Photo</h4>\n" +
    "      <div class=\"col-xs-2\"><i class=\"fa fa-camera\"></i></div>\n" +
    "      <div class=\"col-xs-10 gray-text centered\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, molestias saepe. Eum vero porro quia, facilis magnam eligendi ratione ipsa eveniet, accusantium aliquid laboriosam praesentium! Recusandae nisi necessitatibus alias voluptas.</div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <h4>Address Receipt</h4>\n" +
    "      <div class=\"col-xs-2\"><i class=\"fa fa-map-marker\"></i></div>\n" +
    "      <div class=\"col-xs-10 gray-text centered\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum beatae sint, odio dicta neque, natus labore magni, dolore, nulla incidunt ducimus. Perferendis provident minima, nam consectetur quae aspernatur beatae fugiat!</div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/home/footer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/home/footer.html",
    "<footer class=\"row white\">\n" +
    "  <div class=\"col-md-4 centered\">Connect with Anwani\n" +
    "    <a href=\"\" class=\"rounded\">\n" +
    "      <i class=\"fa fa-facebook\"></i>\n" +
    "    </a>\n" +
    "    <a href=\"\" class=\"rounded\">\n" +
    "      <i class=\"fa fa-twitter\"></i>\n" +
    "    </a>\n" +
    "    <a href=\"\" class=\"rounded\">\n" +
    "      <i class=\"fa fa-google-plus\"></i>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-4 centered\">Copyright &copy 2015 Anwani App </div>\n" +
    "  <div class=\"col-md-4 centered\">Get the Anwani App</div>\n" +
    "</footer>\n" +
    "");
}]);

angular.module("../public/app/partials/home/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/home/header.html",
    "<nav id=\"main\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "      <a class=\"navbar-brand\" href=\"#\">\n" +
    "        <img src=\"images/anwani_logo.png\" style=\"width:100px\" class=\"img-responsive\" alt=\"\">\n" +
    "      </a>\n" +
    "    </div>\n" +
    "  <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "  <ul class=\"nav navbar-nav navbar-right\">\n" +
    "    <li><a href=\"\">HOME</a></li>\n" +
    "    <li><a href=\"\">ABOUT</a></li>\n" +
    "    <li><a href=\"\">FEATURES</a></li>\n" +
    "    <li style=\"padding:10px 15px;margin-left:100px\"><button href=\"\" class=\"btn btn-warning btn-sm\">LOGIN/SIGNUP</button></li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "</div>\n" +
    "</nav>\n" +
    "");
}]);

angular.module("../public/app/partials/home/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/home/index.html",
    "<div ui-view=\"header\"></div>\n" +
    "<div ui-view=\"banner\"></div>\n" +
    "<div ui-view=\"about\"></div>\n" +
    "<div ui-view=\"features\"></div>\n" +
    "<div ui-view=\"partners\"></div>\n" +
    "<div ui-view=\"sub-header\"></div>\n" +
    "<div ui-view=\"footer\"></div>\n" +
    "");
}]);

angular.module("../public/app/partials/home/partners.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/home/partners.html",
    "<div class=\"row padded-sides\">\n" +
    "  <div class=\"col-md-12 white\">\n" +
    "    <h4 class=\"gray-text\">Our Partners</h4>\n" +
    "    <div class=\"seperator\"></div>\n" +
    "    <div class=\"col-md-4 col-md-offset-4 images\">\n" +
    "    <img class=\"col-md-4\" src=\"images/unhcr.png\" alt=\"\">\n" +
    "    <img class=\"col-md-4\" src=\"images/coders.png\" alt=\"\">\n" +
    "    <img class=\"col-md-4\" src=\"images/techmoran.png\" alt=\"\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/home/sub-header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/home/sub-header.html",
    "<div class=\"row\">\n" +
    "  <nav id=\"sub\" class=\"col-md-4 col-md-offset-4\">\n" +
    "    <ul class=\"nav navbar-nav\" style=\"width:100%\">\n" +
    "      <li style=\"width:33%\"><a href=\"\">Home</a></li>\n" +
    "      <li style=\"width:33%\"><a href=\"\">About</a></li>\n" +
    "      <li style=\"width:33%\"><a href=\"\">Features</a></li>\n" +
    "    </ul>\n" +
    "  </nav>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/test/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/test/index.html",
    "<h1>Test Page</h1>\n" +
    "");
}]);
