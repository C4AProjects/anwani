angular.module('templates-dist', ['../public/app/partials/account/activity.html', '../public/app/partials/account/current.html', '../public/app/partials/account/header.html', '../public/app/partials/account/highlight.html', '../public/app/partials/account/home.html', '../public/app/partials/account/index.html', '../public/app/partials/account/login.html', '../public/app/partials/account/side-menu.html', '../public/app/partials/commodities/index.html', '../public/app/partials/directives/footer.html', '../public/app/partials/directives/head.html', '../public/app/partials/import/index.html', '../public/app/partials/import/menu.html', '../public/app/partials/public/about.html', '../public/app/partials/public/graph.html', '../public/app/partials/public/header.html', '../public/app/partials/public/index.html', '../public/app/partials/public/map.html', '../public/app/partials/surveys/home.html', '../public/app/partials/surveys/index.html', '../public/app/partials/surveys/latest.html', '../public/app/partials/surveys/new.html']);

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
