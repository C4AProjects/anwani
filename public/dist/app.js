var app = angular.module("buymore", ['ui.router', 'restangular', 'smart-table',
  'chart.js', 'textAngular', 'angularMoment', 'ui.bootstrap',
  'highcharts-ng', 'leaflet-directive'
]);

app.config(function(RestangularProvider) {
  // RestangularProvider.setBaseUrl('http://new.buymore.co.ke');
  //  RestangularProvider.setRequestSuffix('.json');
});


app.run(['$http', '$rootScope', function($http, $rootScope) {
  $rootScope.date = new Date();
  $rootScope.title = 'Yachiru';
  $rootScope.messages = [];
  $rootScope.menu = [];
}]);
;// I control the main demo.
app.controller("accountCtrl", ['$scope', '$filter', '$timeout', '$state',
  'Restangular', '$http', '$rootScope',
  function(scope, filter, timeout, state, Restangular, $http, rootScope) {}
]);
;// I control the main demo.
app.controller("dataCtrl", ['$scope', '$filter', '$timeout', '$state',
    'Restangular', '$http', '$rootScope',
    function(scope, filter, timeout, state, Restangular, http, rootScope) {


    }
]);
;// I control the main demo.
app.controller("facilityCtrl", ['$scope', '$filter', '$timeout', '$state',
  'Restangular', '$http', '$rootScope',
  function(scope, filter, timeout, state, Restangular, http, rootScope) {
    Facility = Restangular.all('facilities');
    scope.facilities = [];
    angular.extend(scope, {
      nairobi: {
        lat: -1.2833,
        lng: 36.8167,
        zoom: 12
      },
      layers: {
        baselayers: {
          mapbox_outdoors: {
            name: 'Mapbox Street',
            url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
            type: 'xyz',
            layerOptions: {
              apikey: 'pk.eyJ1IjoicnVmdXNtYnVndWEiLCJhIjoibnlSalk2WSJ9._hvU3-KdDhkYcPQ1nGTEfQ',
              mapid: 'rufusmbugua.0c808075'
            }
          }
        }
      }
    });
    // Get the countries geojson data from a JSON
    http.get(
      "json/kenya.json"
      //"https://raw.githubusercontent.com/AshKyd/geojson-regions/master/data/countries/ne_10m_admin_0_countries.geo.json/kenya.json"
    ).success(function(data, status) {
      var newData = [];
      angular.extend(scope, {
        geojson: {
          data: data,
          style: {
            fillColor: "#3498DB",
            weight: 3,
            opacity: 1,
            color: "#e26a6a",
            dashArray: '3',
            fillOpacity: 0.3
          }
        }
      });
    });
    Facility.customGET().then(function(response) {
      scope.markers = response.data;
    })

  }
]);
;// I control the main demo.
app.controller("publicCtrl", ['$scope', '$filter', '$timeout', '$state',
  'Restangular', '$http', '$rootScope',
  function(scope, filter, timeout, state, Restangular, $http, rootScope) {

    scope.areaChart = {
      //Main highcharts options.
      options: {
        chart: {
          type: 'area',
          dataLabels: {
            enabled: false,
          }
        }
      },

      //Series object - a list of series using normal highcharts series options.
      series: [{
        name: 'Stocking Level',
        data: [300, 500, 100]
      }, {
        name: 'Consumption',
        data: [200, 800, 150]
      }],
      xAxis: {
        labels: {
          formatter: function() {
            return this.value; // clean, unformatted number for year
          }
        }
      },
      //Title configuration
      title: {
        text: ''
      },
      yAxis: {
        title: {
          text: 'Data'
        }
      },
      //Boolean to control showng loading status on chart
      loading: false,
      //Configuration for the xAxis. Currently only one x axis can be dynamically controlled.
      //properties currentMin and currentMax provied 2-way binding to the chart's maximimum and minimum
    }
  }
]);
;// I control the main demo.
app.controller("surveysCtrl", ['$scope', '$filter', '$timeout', '$state',
  'Restangular', '$http', '$rootScope',
  function(scope, filter, timeout, state, Restangular, $http, rootScope) {}
]);
;// I control the main demo.
app.controller("usersCtrl", ['$scope', '$filter', '$timeout', '$state',
  'Restangular', '$http', '$rootScope',
  function(scope, filter, timeout, state, Restangular, $http, rootScope) {
    rootScope.filter = false;
    scope.activity_feed = [{
      "text": "Repellendus rerum deleniti necessitatibus quis totam fuga esse recusandae dolore laudantium culpa est debitis consequatur quisquam, vero perferendis, officiis laboriosam cupiditate? Et?"
    }, {
      "text": "Officiis, iure magnam provident nobis quae maxime numquam aliquid ullam in pariatur sequi cupiditate iusto voluptatum, sunt, eius a nostrum possimus ea."
    }, {
      "text": "Facere distinctio voluptates maiores atque porro perferendis iure aliquid cumque, sunt eveniet magni aliquam vero autem quas suscipit quibusdam, iste hic molestias!"
    }]
  }
]);
;// app.directive("header", function () {
//     return {
//         templateUrl: "../ng_app/partials/directives/header.html"
//     }
// });
// app.directive("head", function () {
//     return {
//         templateUrl: "../ng_app/partials/directives/head.html"
//     }
// });

app.directive("footer", function() {
  return {
    templateUrl: "app/partials/directives/footer.html"
  }
});

app.directive('isActiveNav', ['$location', function($location) {
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
  $urlRouterProvider.otherwise("/public");

  // Now set up the states
  /**
   * Public State  :: Currently Depricated
   * @param  {[type]} 'public'     [description]
   * @param  {[type]} {                                                             url: '/' [description]
   * @param  {[type]} views:       {                                                                       '': {                       controller: 'aboutCtrl' [description]
   * @param  {[type]} templateUrl: 'app/partials/public/home.html' [description]
   * @param  {[type]} }                                                             }                          } [description]
   * @return {[type]}              [description]
   */
  $stateProvider.state('public', {
      url: '/public',
      views: {
        '': {
          controller: 'publicCtrl',
          templateUrl: 'app/partials/public/index.html',
        },
        'header@public': {
          templateUrl: 'app/partials/public/header.html',
        },
        'map@public': {
          controller: 'facilityCtrl',
          templateUrl: 'app/partials/public/map.html',
        },
        'about@public': {
          templateUrl: 'app/partials/public/about.html',
        }
      }
    })
    .state('account', {
      url: '/account',
      views: {
        '': {
          controller: 'accountCtrl',
          templateUrl: 'app/partials/account/index.html'
        },
        'header@account': {
          templateUrl: 'app/partials/account/header.html'
        },
        'side-menu@account': {
          templateUrl: 'app/partials/account/side-menu.html'
        }
      }
    })
    .state('account.home', {
      url: '/home',
      views: {
        '': {
          templateUrl: 'app/partials/account/home.html'
        },
        'activity@account.home': {
          templateUrl: 'app/partials/account/activity.html'
        },
        'highlight@account.home': {
          templateUrl: 'app/partials/account/highlight.html'
        },
        'current@account.home': {
          templateUrl: 'app/partials/account/current.html',
        }
      }
    })
    .state('account.map', {
      url: '/map',
      views: {
        '': {
          templateUrl: 'app/partials/account/map.html'
        }
      }
    })
    .state('account.import', {
      url: '/import',
      views: {
        '': {
          controller: 'dataCtrl',
          templateUrl: 'app/partials/import/index.html',
        },
        'menu@account.import': {
          '': {

          }
        }

      }
    })
    .state('account.surveys', {
      url: '/surveys',
      views: {
        '': {
          controller: 'surveysCtrl',
          templateUrl: 'app/partials/surveys/index.html',
        }
      }
    })
    .state('account.surveys.home', {
      url: '/home',
      views: {
        '': {
          templateUrl: 'app/partials/surveys/home.html',
        },
        'latest@account.surveys.home': {
          templateUrl: 'app/partials/surveys/latest.html',
        },
        'new@account.surveys.home': {
          templateUrl: 'app/partials/surveys/new.html',
        },
        'current@account.surveys.home': {
          templateUrl: 'app/partials/account/current.html',
        }
      }
    })
    /**
     * [state description]
     * @param  {[type]} 'account.commodities' [description]
     * @param  {[type]} {                                                                              url: '/commodities' [description]
     * @param  {[type]} views:                {                                                                                          '': {                           controller: 'commoditiesCtrl' [description]
     * @param  {[type]} templateUrl:          'app/partials/commodities/index.html' [description]
     * @param  {[type]} }                                                                              }                                        }    } [description]
     * @return {[type]}                       [description]
     */
    .state('account.commodities', {
      url: '/commodities',
      views: {
        '': {
          controller: 'commoditiesCtrl',
          templateUrl: 'app/partials/commodities/index.html',
        }
      }
    })
    /**
     * [state description]
     * @param  {[type]} 'login'      [description]
     * @param  {[type]} {                                                             url: '/login' [description]
     * @param  {[type]} views:       {                                                                            '':           {        controller: 'publicCtrl' [description]
     * @param  {[type]} templateUrl: 'app/partials/account/login.html' [description]
     * @param  {[type]} }                                                             }             }             [description]
     * @return {[type]}              [description]
     */
    .state('login', {
      url: '/login',
      views: {
        '': {
          controller: 'publicCtrl',
          templateUrl: 'app/partials/account/login.html',
        }

      }
    });
});
;angular.module('templates-dist', ['../public/app/partials/account/activity.html', '../public/app/partials/account/current.html', '../public/app/partials/account/header.html', '../public/app/partials/account/highlight.html', '../public/app/partials/account/home.html', '../public/app/partials/account/index.html', '../public/app/partials/account/login.html', '../public/app/partials/account/side-menu.html', '../public/app/partials/commodities/index.html', '../public/app/partials/directives/footer.html', '../public/app/partials/directives/head.html', '../public/app/partials/import/index.html', '../public/app/partials/import/menu.html', '../public/app/partials/public/about.html', '../public/app/partials/public/graph.html', '../public/app/partials/public/header.html', '../public/app/partials/public/index.html', '../public/app/partials/public/map.html', '../public/app/partials/surveys/home.html', '../public/app/partials/surveys/index.html', '../public/app/partials/surveys/latest.html', '../public/app/partials/surveys/new.html']);

angular.module("../public/app/partials/account/activity.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/activity.html",
    "<div class=\"ui card card-md\">\n" +
    "    <div class=\"header\">\n" +
    "      <i class='ion-ios-paper'></i>\n" +
    "      Activity Feed\n" +
    "      <span class='meta'></span>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "      <div class=\"description\">\n" +
    "        <div class=\"ui small feed\">\n" +
    "          <div class=\"event\">\n" +
    "            <div class=\"content\">\n" +
    "              <div class=\"summary\">\n" +
    "                <a>Helen Troy</a> added <a>2 new illustrations</a>\n" +
    "                <div class=\"date\">\n" +
    "                  4 days ago\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"meta\">\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"event\">\n" +
    "            <div class=\"content\">\n" +
    "              <div class=\"summary\">\n" +
    "                <a>Helen Troy</a> added <a>2 new illustrations</a>\n" +
    "                <div class=\"date\">\n" +
    "                  4 days ago\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"meta\">\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"event\">\n" +
    "            <div class=\"content\">\n" +
    "              <div class=\"summary\">\n" +
    "                <a>Helen Troy</a> added <a>2 new illustrations</a>\n" +
    "                <div class=\"date\">\n" +
    "                  4 days ago\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"meta\">\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"event\">\n" +
    "            <div class=\"content\">\n" +
    "              <div class=\"summary\">\n" +
    "                <a>Helen Troy</a> added <a>2 new illustrations</a>\n" +
    "                <div class=\"date\">\n" +
    "                  4 days ago\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"meta\">\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"event\">\n" +
    "            <div class=\"content\">\n" +
    "              <div class=\"summary\">\n" +
    "                <a>Helen Troy</a> added <a>2 new illustrations</a>\n" +
    "                <div class=\"date\">\n" +
    "                  4 days ago\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"meta\">\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"card-footer\"></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "");
}]);

angular.module("../public/app/partials/account/current.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/current.html",
    "<div class=\"ui card red card-sm\">\n" +
    "  <div class=\"content\">\n" +
    "    <div class=\"description\">\n" +
    "        <h4>Nairobi County</h4>\n" +
    "        <h5><em>Dagoretti Sub-County</em></h5>\n" +
    "        <span><i class=\"fa fa-hospital-o\"></i>Dispensary</span>\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"ui card green card-sm\">\n" +
    "  <div class=\"content\">\n" +
    "    <div class=\"description\">\n" +
    "        <h4>Completed</h4>\n" +
    "        <ul ng-repeat=\"item in listItems\">\n" +
    "          <li ng-bind=\"item.description\"></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/account/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/header.html",
    "<nav id=\"main\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "      <li style=\"height:50px\">\n" +
    "        <a is-active-nav ui-sref=\"public\" class=\"navbar-brand\" href=\"#\"><img style=\"height:50px\" src=\"images/yachiru.png\" class=\"img-responsive\" alt=\"\"></a>\n" +
    "      </li>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "      <ul class=\"nav navbar-nav\">\n" +
    "        <li ><a is-active-nav href=\"\" ><i class=\"\"></i>Notifications</a></li>\n" +
    "        <li ><a is-active-nav href=\"\" ><i class=\"\"></i>FAQs</a></li>\n" +
    "        <li ><a is-active-nav href=\"\" ><i class=\"\"></i>Submit Query</a></li>\n" +
    "      </ul>\n" +
    "      <ul class=\"nav navbar-nav navbar-right\">\n" +
    "        <li><a href=\"\" is-active-nav ui-sref=\"login\" ><i class=\"ion-log-out\"></i>Logout</a></li>\n" +
    "      </ul>\n" +
    "    </div><!-- /.navbar-collapse -->\n" +
    "  </div><!-- /.container-fluid -->\n" +
    "</nav>\n" +
    "");
}]);

angular.module("../public/app/partials/account/highlight.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/highlight.html",
    "<div class=\"ui card card-sm\">\n" +
    "  <div class=\"header\">\n" +
    "    <i class='ion-ios-paper'></i>\n" +
    "    Latest Statistics\n" +
    "    <span class='meta'></span>\n" +
    "  </div>\n" +
    "  <div class=\"content\">\n" +
    "    <div class=\"description\">\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/account/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/home.html",
    "<div ui-view=\"current\" class=\"four wide column\"></div>\n" +
    "<div ui-view=\"activity\" class=\"four wide column\"></div>\n" +
    "<div ui-view=\"highlight\" class=\"seven wide column\"></div>\n" +
    "");
}]);

angular.module("../public/app/partials/account/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/index.html",
    "<header ui-view=\"header\"></header>\n" +
    "<div class=\"content\">\n" +
    "  <div class=\"ui grid stackable container\">\n" +
    "    <div ui-view=\"side-menu\" class=\"one wide column\"></div>\n" +
    "    <div ui-view class=\"ui cards fifteen wide column stackable grid container\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/account/login.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/login.html",
    "<div id=\"login-wrapper\">\n" +
    "  <img style=\"height:50px\" src=\"images/yachiru.png\" class=\"img-responsive\" alt=\"\">\n" +
    "  <form id=\"login\">\n" +
    "    <h3>Login to System</h3>\n" +
    "    <div class=\"form-group\">\n" +
    "            <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n" +
    "          </div>\n" +
    "          <div class=\"form-group\">\n" +
    "                  <input type=\"text\" class=\"form-control\" placeholder=\"Password\">\n" +
    "                </div>\n" +
    "          <button class=\"btn\"><i class=\"ion-log-in\"></i>Login</button>\n" +
    "          <a href=\"#\" style=\"margin-left:20px\">Forgot Password</a>\n" +
    "  </form>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/account/side-menu.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/side-menu.html",
    "<div class=\"ui vertical icon menu\" id=\"side_menu\">\n" +
    "  <a tooltip-placement=\"right\" tooltip=\"Home\" href=\"\" class=\"item\" is-active-link ui-sref=\"account.home\"><i class=\"icon ion-home\"></i></a>\n" +
    "  <a tooltip-placement=\"right\" tooltip=\"Map\" href=\"\" class=\"item\" is-active-link ui-sref=\"account.map\"><i class=\"icon ion-map\"></i></a>\n" +
    "  <a tooltip-placement=\"right\" tooltip=\"Log\" href=\"\" class=\"item\" is-active-link ui-sref=\"account.log\"><i class=\"icon ion-social-rss\"></i></a>\n" +
    "  <a tooltip-placement=\"right\" tooltip=\"Surveys\" href=\"\" class=\"item\" is-active-link ui-sref=\"account.surveys.home\"><i class=\"icon ion-document\"></i></a>\n" +
    "  <a tooltip-placement=\"right\" tooltip=\"Commodities\" href=\"\" class=\"item\" is-active-link ui-sref=\"account.commodities.home\"><i class=\"icon ion-ios-box\"></i></a>\n" +
    "  <a tooltip-placement=\"right\" tooltip=\"Account\" href=\"\" class=\"item\" is-active-link ui-sref=\"account.profile\"><i class=\"icon ion-person\"></i></a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/commodities/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/commodities/index.html",
    "<div ui-view=\"latest\"></div>\n" +
    "<div ui-view=\"new\"></div>\n" +
    "<div ui-view=\"\"></div>\n" +
    "");
}]);

angular.module("../public/app/partials/directives/footer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/directives/footer.html",
    "<nav class=\"navbar navbar-default footer\">\n" +
    "  \n" +
    "</nav>\n" +
    "");
}]);

angular.module("../public/app/partials/directives/head.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/directives/head.html",
    "");
}]);

angular.module("../public/app/partials/import/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/import/index.html",
    "<div ui-view=\"\"></div>\n" +
    "<div ui-view=\"menu\"></div>");
}]);

angular.module("../public/app/partials/import/menu.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/import/menu.html",
    "Menu");
}]);

angular.module("../public/app/partials/public/about.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/about.html",
    "<div class=\"info blue\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <h3><i class=\"ion-information-circled\"></i>About Yachiru</h3>\n" +
    "      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n" +
    "       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n" +
    "       nulla pariatur.\n" +
    "      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n" +
    "       officia deserunt mollit\n" +
    "       anim id est laborum.\n" +
    "      </div>\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <div class=\"inner\">\n" +
    "      <h4><i class=\"ion-ios-box\"></i>Commodity Management</h4>\n" +
    "      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n" +
    "       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n" +
    "       nulla pariatur.\n" +
    "      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n" +
    "       officia deserunt mollit\n" +
    "       anim id est laborum.\n" +
    "       <h5>Features</h5>\n" +
    "       <ol>\n" +
    "         <li></li>\n" +
    "         <li></li>\n" +
    "         <li></li>\n" +
    "         <li></li>\n" +
    "         <li></li>\n" +
    "       </ol>\n" +
    "       </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-6\">\n" +
    "        <div class=\"inner\">\n" +
    "        <h4><i class=\"ion-document-text\"></i>Surveys</h4>\n" +
    "        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n" +
    "         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n" +
    "         nulla pariatur.\n" +
    "        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n" +
    "         officia deserunt mollit\n" +
    "         anim id est laborum.\n" +
    "         <h5>Features</h5>\n" +
    "         <ol>\n" +
    "           <li></li>\n" +
    "           <li></li>\n" +
    "           <li></li>\n" +
    "           <li></li>\n" +
    "           <li></li>\n" +
    "         </ol>\n" +
    "    </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"info red\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <h3><i class=\"fa fa-database\"></i>Open Data</h3>\n" +
    "      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n" +
    "       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n" +
    "       nulla pariatur.\n" +
    "      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n" +
    "       officia deserunt mollit\n" +
    "       anim id est laborum.\n" +
    "      </div>\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <div class=\"inner\">\n" +
    "      <h4>Government</h4>\n" +
    "      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n" +
    "       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n" +
    "       nulla pariatur.\n" +
    "      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n" +
    "       officia deserunt mollit\n" +
    "       anim id est laborum.\n" +
    "       </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-6\">\n" +
    "        <div class=\"inner\">\n" +
    "        <h4>Partners</h4>\n" +
    "        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n" +
    "         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n" +
    "         nulla pariatur.\n" +
    "        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n" +
    "         officia deserunt mollit\n" +
    "         anim id est laborum.\n" +
    "    </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"info main\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <div class=\"inner\">\n" +
    "          <h3>Start Using Yachiru</h3>\n" +
    "          <div class=\"col-md-6\">\n" +
    "            <p style=\"text-align:right\" >Already have an account?</p>\n" +
    "            <p style=\"text-align:right\" >Access the system now.</p>\n" +
    "            <a  style=\"float:right\" href=\"\" class=\"my button blue\"><i class=\"ion-log-in\"></i>Login</a>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-6\">\n" +
    "            <p style=\"text-align:left\">Want to start using your details?</p>\n" +
    "            <p style=\"text-align:left\">Fill in the form now and we'll get back to you </p>\n" +
    "            <a style=\"float:left\" href=\"\" class=\"my button red\"><i class=\"ion-person-add\"></i>Apply</a>\n" +
    "          </div>\n" +
    "\n" +
    "\n" +
    "       </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/public/graph.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/graph.html",
    "<div class=\"row\">\n" +
    "  <div class=\"large graph\">\n" +
    "    <h3 class=\"cm\">Stocking Level vs. Consumption</h3>\n" +
    "    <div class=\"inner\">\n" +
    "      <highchart id=\"exp-time\" config=\"areaChart\" style=\"height:100%\">data</highchart>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/public/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/header.html",
    "<nav id=\"main\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "      <li style=\"height:50px\">\n" +
    "        <a is-active-nav ui-sref=\"public\" class=\"navbar-brand\" href=\"#\"><img style=\"height:50px\" src=\"images/yachiru.png\" class=\"img-responsive\" alt=\"\"></a>\n" +
    "      </li>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "      <ul class=\"nav navbar-nav\">\n" +
    "        <li><a href=\"\" is-active-nav ui-sref=\"about\" ></i>About Yachiru</a></li>\n" +
    "        <li><a href=\"\" is-active-nav ui-sref=\"contact\" ></i>Contact Us</a></li>\n" +
    "      </ul>\n" +
    "      <ul class=\"nav navbar-nav navbar-right\">\n" +
    "        <li><a href=\"\" is-active-nav ui-sref=\"login\" ><i class=\"ion-log-in\"></i>Login</a></li>\n" +
    "      </ul>\n" +
    "    </div><!-- /.navbar-collapse -->\n" +
    "  </div><!-- /.container-fluid -->\n" +
    "</nav>\n" +
    "");
}]);

angular.module("../public/app/partials/public/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/index.html",
    "<header ui-view=\"header\"></header>\n" +
    "<div ui-view=\"map\"></div>\n" +
    "<div ui-view=\"about\">\n" +
    "  \n" +
    "</div>\n" +
    "<!-- <div ui-view=\"graph\"></div> -->\n" +
    "");
}]);

angular.module("../public/app/partials/public/map.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/map.html",
    "<div class=\"top row\">\n" +
    "  <div class=\"map\" id=\"map-navigation\" style=\"height:90%\">\n" +
    "      <form action=\"\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <input type=\"text\" class=\"form-control\" placeholder=\"Search for a County, Sub-County or a Facility\">\n" +
    "        </div>\n" +
    "      </form>\n" +
    "  </div>\n" +
    "  <div class=\"map\" id =\"map-container\">\n" +
    "    <leaflet width=\"100%\" height=\"90%\" center=\"nairobi\" markers=\"markers\" layers=\"layers\">\n" +
    "    </leaflet>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<script src='https://api.tiles.mapbox.com/mapbox.js/v2.2.1/mapbox.js'></script>\n" +
    "<script src='https://api.tiles.mapbox.com/mapbox.js/plugins/turf/v1.3.0/turf.min.js'></script>\n" +
    "<script src='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/leaflet.markercluster.js'></script>\n" +
    "<link href='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/MarkerCluster.css' rel='stylesheet' />\n" +
    "<link href='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/MarkerCluster.Default.css' rel='stylesheet' />\n" +
    "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.css\">\n" +
    "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.min.js\"></script>\n" +
    "");
}]);

angular.module("../public/app/partials/surveys/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/surveys/home.html",
    "<div ui-view=\"current\" class=\"four wide column\"></div>\n" +
    "<div ui-view=\"new\" class=\"four wide column\"></div>\n" +
    "<div ui-view=\"latest\" class=\"four wide column\"></div>\n" +
    "");
}]);

angular.module("../public/app/partials/surveys/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/surveys/index.html",
    "<div ui-view=\"\" class=\"ui cards sixteen wide column stackable grid container\" ></div>\n" +
    "");
}]);

angular.module("../public/app/partials/surveys/latest.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/surveys/latest.html",
    "<div class=\"ui card card-sm\">\n" +
    "  <div class=\"header\">\n" +
    "    <i class='ion-ios-paper'></i>\n" +
    "    Latest Statistics\n" +
    "    <span class='meta'></span>\n" +
    "  </div>\n" +
    "  <div class=\"content\">\n" +
    "    <div class=\"description\">\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/surveys/new.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/surveys/new.html",
    "<div class=\"ui card card-sm\">\n" +
    "  <div class=\"header\">\n" +
    "    <i class='ion-ios-paper'></i>\n" +
    "    New Survey\n" +
    "    <span class='meta'></span>\n" +
    "  </div>\n" +
    "  <div class=\"content\">\n" +
    "    <div class=\"description\">\n" +
    "        <button class=\"ui button\">Child Health</button>\n" +
    "        <button class=\"ui button\">Maternal And Neonatal Health</button>\n" +
    "        <button class=\"ui button\">IMCI</button>\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);
