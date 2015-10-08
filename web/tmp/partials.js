angular.module('templates-dist', ['../public/app/partials/account/index.html', '../public/app/partials/account/login.html', '../public/app/partials/home/about.html', '../public/app/partials/home/banner.html', '../public/app/partials/home/features.html', '../public/app/partials/home/footer.html', '../public/app/partials/home/header.html', '../public/app/partials/home/index.html', '../public/app/partials/home/partners.html', '../public/app/partials/home/sub-header.html', '../public/app/partials/test/index.html']);

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
    "<div class=\"padded-sides about\">\n" +
    "  <div class=\"row white padded-bottom\" style=\"padding-top:12%\">\n" +
    "\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <div class=\"col-md-4 slighted-above centered\">\n" +
    "        <span class=\"black-text\" translate>about.first.share</span>\n" +
    "        <a style=href='#' class='symbol' title='circlefacebook'></a>\n" +
    "        <a href='#' class='symbol' title='circletwitterbird'></a>\n" +
    "        <a href='#' class='symbol' title='circlegoogleplus'></a>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-offset-8 centered col-md-4 slighted-above\">\n" +
    "        <span class='black-text' translate>about.first.featured</span>\n" +
    "        <img src=\"images/techcrunch.png\" alt=\"\">\n" +
    "        <img src=\"images/techmoran.png\" alt=\"\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-offset-4 col-md-4\">\n" +
    "        <h3 style=\"color:black !important\" class=\"centered\" translate>about.first.title</h3>\n" +
    "        <p class=\"centered gray-text\" translate>about.first.description</p>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"circled\"><i class=\"\"></i></div>\n" +
    "      <img src=\"images/physical.png\" alt=\"\" class=\"img-responsive\" style=\"margin:auto\">\n" +
    "      <h5 class=\"centered black-text\" translate>about.second.col_1.title</h5>\n" +
    "      <p class='black-text' translate>about.second.col_1.description\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"circled\"><i class=\"\"></i></div>\n" +
    "      <img src=\"images/service_delivery.png\" alt=\"\" class=\"img-responsive\" style=\"margin:auto\">\n" +
    "      <h5 class=\"centered black-text\" translate>about.second.col_2.title</h5>\n" +
    "      <p class='black-text' translate>about.second.col_2.description</p>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"circled\"><i class=\"\"></i></div>\n" +
    "      <img src=\"images/citizen_empowerment.png\" alt=\"\" class=\"img-responsive\" style=\"margin:auto\">\n" +
    "      <h5 class=\"centered black-text\" translate>about.second.col_3.title</h5>\n" +
    "      <p class='black-text' translate>about.second.col_3.description</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/home/banner.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/home/banner.html",
    "<div class=\"banner padded-sides\">\n" +
    "    <div class=\"row description\">\n" +
    "      <div class=\"col-md-4 padded-top\"\n" +
    "      sn-skrollr\n" +
    "      data--100p-top=\"font-size:0.5em !important\"\n" +
    "      >\n" +
    "        <h3 class=\"white-text\" translate>banner.col_1.title</h3>\n" +
    "        <p class=\"white-text\" translate>banner.col_1.description</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4 padded-top right\"\n" +
    "      sn-skrollr\n" +
    "      data--100p-top=\"font-size:0.5em !important\"\n" +
    "      >\n" +
    "        <h5 class=\"white-text hidden-xs hidden-sm\" style=\"margin-bottom:0.2em\" translate>banner.col_2.title</h5>\n" +
    "        <p class=\"white-text hidden-xs hidden-sm\" translate>banner.col_2.description</p>\n" +
    "        <button class=\"btn btn-default btn-large btn-blue hidden-xs hidden-sm\" translate>banner.col_2.button</button> <span class=\"white-text hidden-xs hidden-sm\" translate>banner.col_2.option</span>\n" +
    "        <img src=\"images/google.png\" class=\"img-responsive play\" alt=\"\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4 right\">\n" +
    "        <img\n" +
    "        sn-skrollr\n" +
    "        data-start=\"width:80%\"\n" +
    "        data--80-top=\"width:20%\"\n" +
    "        class=\"phone img-responsive\" src=\"images/phone_banner.jpg\" alt=\"\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "");
}]);

angular.module("../public/app/partials/home/features.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/home/features.html",
    "<div class=\"row gray padded translate features\">\n" +
    "  <div class=\"col-md-12\">\n" +
    "    <h3 class=\"centered\" translate>features.top.title</h3>\n" +
    "    <h4 class=\"gray\" translate>features.top.description</h4>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-4 \" style=\"padding-top:30px\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <h4 class=\"col-md-10 col-xs-offset-2\" translate>features.first.col_1.title</h4>\n" +
    "      <div class=\"col-xs-2 no-padding\"><img src=\"images/create_address.png\" class=\"img-responsive\" alt=\"\"></div>\n" +
    "      <div class=\"col-xs-10 gray-text\" translate>features.first.col_1.description</div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <h4 class=\"col-md-10 col-xs-offset-2\" translate>features.first.col_2.title</h4>\n" +
    "      <div class=\"col-xs-2 no-padding\"><img src=\"images/existing_address.png\" class=\"img-responsive\" alt=\"\"></div>\n" +
    "      <div class=\"col-xs-10 gray-text\" translate>features.first.col_2.description</div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <h4 class=\"col-md-10 col-xs-offset-2\" translate>features.first.col_3.title</h4>\n" +
    "      <div class=\"col-xs-2 no-padding\"><img src=\"images/manage_address.png\" class=\"img-responsive\" alt=\"\"></div>\n" +
    "      <div class=\"col-xs-10 gray-text\" translate>features.first.col_3.description</div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-4 right\" style=\"padding-top:30px\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <h4 class=\"col-md-10 col-xs-offset-2\" translate>features.second.col_1.title</h4>\n" +
    "      <div class=\"col-xs-2 no-padding\"><img src=\"images/reply_all.png\" class=\"img-responsive\" alt=\"\"></div>\n" +
    "      <div class=\"col-xs-10 gray-text\" translate>features.second.col_1.description</div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <h4 class=\"col-md-10 col-xs-offset-2\" translate>features.second.col_2.title</h4>\n" +
    "      <div class=\"col-xs-2 no-padding\"><img src=\"images/camera.png\" class=\"img-responsive\" alt=\"\"></div>\n" +
    "      <div class=\"col-xs-10 gray-text\" translate>features.second.col_2.description</div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <h4 class=\"col-md-10 col-xs-offset-2\" translate>features.second.col_3.title</h4>\n" +
    "      <div class=\"col-xs-2 no-padding\"><img src=\"images/map.png\" class=\"img-responsive\" alt=\"\"></div>\n" +
    "      <div class=\"col-xs-10 gray-text\" translate>features.second.col_3.description</div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-4 right\">\n" +
    "  <img\n" +
    "  sn-skrollr\n" +
    "  data-start=\"width:20%\"\n" +
    "  data-40p-top=\"width:100%\"\n" +
    "  src=\"images/phone_image.png\" alt=\"\" class=\"img-responsive\" style=\"margin:auto\">\n" +
    "<p class=\"gray-text centered\" translate>features.tertiary</p>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/home/footer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/home/footer.html",
    "<footer class=\"row white\">\n" +
    "  <div class=\"col-md-4 centered\">\n" +
    "    <span class=\"block gray-text\" translate>footer.col_1.description</span>\n" +
    "    <a href='#' class='symbol' title='circlefacebook'></a>\n" +
    "    <a href='#' class='symbol' title='circletwitterbird'></a>\n" +
    "    <a href='#' class='symbol' title='circlegoogleplus'></a>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-4 centered right\">\n" +
    "    <span class=\"gray-text\" translate>footer.col_2.description</span>\n" +
    "<img src=\"images/google.png\" class=\"img-responsive play\" alt=\"\">\n" +
    "  </div>\n" +
    "  <div class=\"col-md-4 centered right\"><span class=\"gray-text\" >Copyright &copy 2015 Anwani App</span> </div>\n" +
    "</footer>\n" +
    "");
}]);

angular.module("../public/app/partials/home/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/home/header.html",
    "<nav id=\"main\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n" +
    "        <span class=\"sr-only\" translate>header.nav</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "      <a class=\"navbar-brand\" href=\"#\">\n" +
    "        <img src=\"images/anwani_logo.png\" style=\"width:100px\" class=\"img-responsive\" alt=\"\">\n" +
    "      </a>\n" +
    "    </div>\n" +
    "  <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "    <form action=\"\"class=\"navbar-form navbar-right\">\n" +
    "      <label for=\"\" translate>header.lang</label>\n" +
    "      <select class=\"form-control\" name=\"\" id=\"\" ng-model=\"lang\" ng-change=\"toggleLanguage(lang)\"\n" +
    "        ng-options=\"lang.label as lang.label for lang in languages\">\n" +
    "      </select>\n" +
    "    </form>\n" +
    "  <ul class=\"nav navbar-nav navbar-right\" >\n" +
    "    <li bs-scrollspy du-scrollspy du-smooth-scroll href=\"#home\" data-target=\"#home\"><a style=\"text-transform:uppercase !important\" translate>header.links.one</a></li>\n" +
    "    <li bs-scrollspy du-scrollspy du-smooth-scroll href=\"#about\" data-target=\"#about\"><a style=\"text-transform:uppercase !important\" translate>header.links.two</a></li>\n" +
    "    <li bs-scrollspy du-scrollspy du-smooth-scroll href=\"#features\" data-target=\"#features\"><a style=\"text-transform:uppercase !important\" translate>header.links.three</a></li>\n" +
    "    <li><a href=\"admin/#/login\" class=\"btn btn-warning btn-sm\" style=\"margin-top:10px;padding:5px;\" translate>header.links.four</a></li>\n" +
    "  </ul>\n" +
    "\n" +
    "</div>\n" +
    "</div>\n" +
    "</nav>\n" +
    "");
}]);

angular.module("../public/app/partials/home/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/home/index.html",
    "<div ui-view=\"header\"></div>\n" +
    "<div id=\"home\" ui-view=\"banner\"></div>\n" +
    "<div id=\"about\" ui-view=\"about\"></div>\n" +
    "<div id=\"features\" ui-view=\"features\"></div>\n" +
    "<div ui-view=\"partners\"></div>\n" +
    "<div ui-view=\"sub-header\"></div>\n" +
    "<div ui-view=\"footer\"></div>\n" +
    "");
}]);

angular.module("../public/app/partials/home/partners.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/home/partners.html",
    "<div class=\"row padded-sides\">\n" +
    "  <div class=\"col-md-12 white\">\n" +
    "    <h4 class=\"gray-text centered\" translate>partners</h4>\n" +
    "    <div class=\"seperator\"></div>\n" +
    "    <div class=\"col-md-4 col-md-offset-4 row images\">\n" +
    "    <img class=\"col-xs-4\" src=\"images/unhcr.png\" alt=\"\">\n" +
    "    <img class=\"col-xs-4\" src=\"images/coders.png\" alt=\"\">\n" +
    "    <img class=\"col-xs-4\" src=\"images/techmoran.png\" alt=\"\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/home/sub-header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/home/sub-header.html",
    "<div class=\"row\">\n" +
    "  <nav id=\"sub\" class=\"col-md-4 col-md-offset-4\">\n" +
    "    <ul class=\"nav navbar-nav row\" style=\"width:100%\">\n" +
    "      <li class=\"col-xs-4\" bs-scrollspy du-scrollspy du-smooth-scroll href=\"#home\" data-target=\"#home\"><a class=\"centered\" translate>header.links.one</a></li>\n" +
    "      <li class=\"col-xs-4\" bs-scrollspy du-scrollspy du-smooth-scroll href=\"#about\" data-target=\"#about\"><a class=\"centered\" translate>header.links.two</a></li>\n" +
    "      <li class=\"col-xs-4\" bs-scrollspy du-scrollspy du-smooth-scroll href=\"#features\" data-target=\"#features\"><a class=\"centered\" translate>header.links.three</a></li>\n" +
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
