var app = angular.module("buymore", ['ui.router','restangular','smart-table','chart.js','textAngular','angularMoment','ui.bootstrap']);

app.config(function(RestangularProvider) {
  RestangularProvider.setBaseUrl('http://new.buymore.co.ke');
//  RestangularProvider.setRequestSuffix('.json');
});


app.run(['$http', '$rootScope', function($http, $rootScope) {
     $rootScope.date = new Date();
     $rootScope.title = 'Buymore Coin';
     $rootScope.messages=[];
     $rootScope.menu=[];
 }]);
;// I control the main demo.
app.controller("aboutCtrl", ['$scope', '$filter', '$timeout', '$state', 'Restangular', '$http', function(scope, filter, timeout, state, Restangular, $http) {
    var Ambassador = Restangular.all('ambassador').all('register');
    scope.getMember = function getMember(newMember) {
        console.log(newMember);
        scope.member = newMember;
        state.go('members.view');
    };
    scope.slides = [{'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus doloribus deleniti obcaecati necessitatibus expedita, facilis nihil, voluptatum error odio impedit dolorum blanditiis beatae mollitia eum dicta numquam minus architecto fuga! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptate consequuntur quos ipsum eaque, pariatur molestiae. Quas molestiae ex placeat harum veritatis nesciunt totam, veniam, esse dolor nisi, odio nobis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum eveniet fuga corrupti veritatis possimus quibusdam suscipit tempore voluptas beatae a quos at perferendis sapiente iure nihil nobis ab, sit nisi.'}, {'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat aliquid, vero itaque recusandae cumque, voluptatibus odit repudiandae eligendi qui officiis iure alias quis ipsa harum iste, dolorem omnis, doloremque id! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sint quisquam maiores asperiores perferendis ut neque ratione labore consequatur animi iure at similique dolores eligendi, sit voluptates, culpa fugiat porro. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam culpa, provident natus aut. Fugit odio, iste, in magni quae numquam nobis praesentium aliquam porro asperiores dolore ratione at ad modi?'}, {'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quo corporis enim, ad, doloribus voluptate. Possimus vero quia assumenda, vel incidunt itaque eius natus hic, debitis explicabo rem modi facere.'}];
    console.log(scope.slides);
    scope.modal = {
        "title": "Apply for BSA Program",
        //            "content": "Hello Modal<br />This is a multiline message!"
    };
    scope.apply = function apply(ambassador) {
        // var alert_text;
        // var alert_type;
        // var alert_title;
        // var myAlert;
        // var ambassadorData={tag:'buymore_bsa', member_identification:ambassador.info};
        // alert_title = "";
        // alert_text = "Please wait...";
        // alert_type = "warning";
        Ambassador.post(ambassadorData).then(function(response) {
            alert_text = response;
        }, function() {
            alert_title = "Error!";
            alert_text = "There was an error saving";
            alert_type = "danger";
            // myAlert.hide();
            // myAlert = alert({title: alert_title, content: alert_text, placement: 'top', type: alert_type, show: true,container:"#alerts"});
        });
    };
}]);;// I control the main demo.
app.controller("adminCtrl", ['$scope', '$filter', '$timeout', '$state', 'Restangular', '$http', function(scope, filter, timeout, state, Restangular, $http) {
    scope.activity_feed = [{
		"text": "Repellendus rerum deleniti necessitatibus quis totam fuga esse recusandae dolore laudantium culpa est debitis consequatur quisquam, vero perferendis, officiis laboriosam cupiditate? Et?"
	}, {
		"text": "Officiis, iure magnam provident nobis quae maxime numquam aliquid ullam in pariatur sequi cupiditate iusto voluptatum, sunt, eius a nostrum possimus ea."
	}, {
		"text": "Facere distinctio voluptates maiores atque porro perferendis iure aliquid cumque, sunt eveniet magni aliquam vero autem quas suscipit quibusdam, iste hic molestias!"
	}]
}]);;// I control the main demo.
app.controller("expenditureCtrl", ['$scope', '$filter', '$timeout', '$state', 'Restangular', '$http', function(scope, filter, timeout, state, Restangular, $http) {
	scope.latest = [];
	scope.spread = [];
scope.graph=[];

	scope.latest.labels = ["Transport", "Lunch", "Airtime"];
	scope.latest.data = [300, 500, 100];

	scope.items = [{
		"name": "Transport",
		"value": 300
	}, {
		"name": "Lunch",
		"value": 500
	}, {
		"name": "Airtime",
		"value": 100
	}]

	scope.feed = [{
		"text": "Repellendus rerum deleniti necessitatibus quis totam fuga esse recusandae dolore laudantium culpa est debitis consequatur quisquam, vero perferendis, officiis laboriosam cupiditate? Et?"
	}, {
		"text": "Officiis, iure magnam provident nobis quae maxime numquam aliquid ullam in pariatur sequi cupiditate iusto voluptatum, sunt, eius a nostrum possimus ea."
	}, {
		"text": "Facere distinctio voluptates maiores atque porro perferendis iure aliquid cumque, sunt eveniet magni aliquam vero autem quas suscipit quibusdam, iste hic molestias!"
	}]



	scope.spread.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
	scope.spread.series = ['Series A', 'Series B'];

	scope.spread.data = [
		[65, 59, 80, 81, 56, 55, 40],
		[28, 48, 40, 19, 86, 27, 90]
	];
	scope.graph.options = {
		scaleShowGridLines: false,
		scaleShowHorizontalLines: false,
		scaleShowVaericalLines: false,
		responsive:true
	}

	scope.onClick = function onClick(points,evt){
		console.log(points);
	}
}]);;// app.directive("header", function () {
//     return {
//         templateUrl: "../ng_app/partials/directives/header.html"
//     }
// });
// app.directive("head", function () {
//     return {
//         templateUrl: "../ng_app/partials/directives/head.html"
//     }
// });

app.directive("footer", function () {
    return {
        templateUrl: "../ng_app/partials/directives/footer.html"
    }
});

app.directive('isActiveNav', [ '$location', function($location) {
return {
 restrict: 'A',
 link: function(scope, element) {
   scope.location = $location;
   scope.$watch('location.path()', function(currentPath) {
     if('#' + currentPath == element[0].hash) {
       element.parent().addClass('active');
     } else {
       element.parent().removeClass('active');
     }
   });
 }
 };
}]);
;app.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider.state('public', {
            url: '/',
            views: {
                '': {
                    controller: 'aboutCtrl',
                    templateUrl: '../ng_app/partials/public/home.html',
                },
                'header@public': {
                    templateUrl: '../ng_app/partials/public/header.html',
                },
                'about@public': {
                    templateUrl: '../ng_app/partials/pages/about.html',
                },
                'requirements@public': {
                    templateUrl: '../ng_app/partials/pages/requirements.html',
                    controller: function($rootScope) {}
                },
                'how@public': {
                    templateUrl: '../ng_app/partials/pages/how.html'
                },
                'testimonials:public': {
                    templateUrl: '../ng_app/partials/pages/testimonials.html'
                },
                'benefits@public': {
                    controller: function($rootScope) {},
                    templateUrl: '../ng_app/partials/pages/benefits.html'
                }
            }
        })
        .state('admin', {
            url: '/admin',
            views: {
                '': {
                    controller: 'adminCtrl',
                    templateUrl: '../ng_app/partials/admin/index.html'
                },
                'header@admin':{
                    templateUrl:'../ng_app/partials/admin/header.html'
                },
                'filter@admin':{
                    templateUrl:'../ng_app/partials/admin/filter.html'
                },
                'user-banner@admin':{
                    templateUrl:'../ng_app/partials/admin/user-banner.html'
                }
            }

        })
        .state('admin.expenditure', {
            url: '/expenditure',
            views: {
                '': {
                    controller: 'expenditureCtrl',
                    templateUrl: '../ng_app/partials/expenditure/index.html'
                },
                'expenditure-pie@admin.expenditure':{
                    templateUrl: '../ng_app/partials/expenditure/expenditure-pie.html'
                },
                'expenditure-list@admin.expenditure':{
                    templateUrl: '../ng_app/partials/expenditure/expenditure-list.html'
                },
                'expenditure-feed@admin.expenditure':{
                    templateUrl: '../ng_app/partials/expenditure/expenditure-feed.html'
                },
                'expenditure-spread@admin.expenditure':{
                    templateUrl: '../ng_app/partials/expenditure/expenditure-spread.html'
                },
                'expenditure-category@admin.expenditure':{
                    templateUrl: '../ng_app/partials/expenditure/expenditure-category.html'
                },
                'expenditure-category-time@admin.expenditure':{
                    templateUrl: '../ng_app/partials/expenditure/expenditure-category-time.html'
                }
            }

        });
});;angular.module('templates-dist', ['../ng_app/partials/admin/filter.html', '../ng_app/partials/admin/header.html', '../ng_app/partials/admin/index.html', '../ng_app/partials/admin/user-banner.html', '../ng_app/partials/directives/footer.html', '../ng_app/partials/directives/head.html', '../ng_app/partials/expenditure/expenditure-category-time.html', '../ng_app/partials/expenditure/expenditure-category.html', '../ng_app/partials/expenditure/expenditure-feed.html', '../ng_app/partials/expenditure/expenditure-list.html', '../ng_app/partials/expenditure/expenditure-pie.html', '../ng_app/partials/expenditure/expenditure-spread.html', '../ng_app/partials/expenditure/index.html', '../ng_app/partials/pages/about.html', '../ng_app/partials/pages/benefits.html', '../ng_app/partials/pages/how.html', '../ng_app/partials/pages/requirements.html', '../ng_app/partials/pages/signup_form.html', '../ng_app/partials/pages/testimonials.html', '../ng_app/partials/public/header.html', '../ng_app/partials/public/home.html']);

angular.module("../ng_app/partials/admin/filter.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../ng_app/partials/admin/filter.html",
    "<nav>\n" +
    "    <div class=\"nav-wrapper\">\n" +
    "      <ul id=\"nav-mobile\" class=\"center hide-on-med-and-down\">\n" +
    "        <li class=\"active\"><a href=\"\"><i class=\"ion-calendar\"></i>Daily</a></li>\n" +
    "        <li><a href=\"\"><i class=\"ion-calendar\"></i>Weekly</a></li>\n" +
    "        <li><a href=\"\"><i class=\"ion-calendar\"></i>Monthly</a></li>\n" +
    "        <li><a href=\"\"><i class=\"ion-calendar\"></i>Yearly</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </nav>");
}]);

angular.module("../ng_app/partials/admin/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../ng_app/partials/admin/header.html",
    "<nav id='main'>\n" +
    "    <div class=\"nav-wrapper\">\n" +
    "      <!-- <a href=\"#\" class=\"brand-logo\">Buymore Coin</a> -->\n" +
    "      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n" +
    "        <li><a is-active-nav ui-sref=\"admin.expenditure\" href=\"\"><i class=\"ion-cash\"></i>Track Expenditure</a></li>\n" +
    "        <li><a is-active-nav href=\"\"><i class=\"ion-ios-box\"></i>My Savings</a></li>\n" +
    "        <li><a is-active-nav href=\"\"><i class=\"ion-android-list\"></i>My Feed</a></li>\n" +
    "        <li class='user'><a href=\"\"><i class=\"ion-user\"></i>Welcome, <span>Rufus Mbugua</span></a></li>\n" +
    "        <!-- <li><a href=\"components.html\">Components</a></li>\n" +
    "        <li><a href=\"javascript.html\">JavaScript</a></li> -->\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </nav>\n" +
    "\n" +
    "  <script>\n" +
    "  $(document).ready(function(){\n" +
    "$(\"nav#main\").headroom({\n" +
    "  \"offset\": 0,\n" +
    "  \"tolerance\": 0,\n" +
    "  \"classes\": {\n" +
    "    \"initial\": \"animated\",\n" +
    "    \"pinned\": \"slideDown\",\n" +
    "    \"unpinned\": \"slideUp\"\n" +
    "  }\n" +
    "});\n" +
    "  });\n" +
    "  \n" +
    "  </script>");
}]);

angular.module("../ng_app/partials/admin/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../ng_app/partials/admin/index.html",
    "<div ui-view=\"user-banner\"></div>\n" +
    "<div ui-view=\"header\"></div>\n" +
    "<div ui-view=\"filter\" class=\"secondary-nav\"></div>\n" +
    "<div ui-view></div>");
}]);

angular.module("../ng_app/partials/admin/user-banner.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../ng_app/partials/admin/user-banner.html",
    "<div class=\"row\">\n" +
    "	<div class=\"col m3\">\n" +
    "	<div class=\"col m6 offset-m3\">\n" +
    "		<img src=\"../bower_components/ionicons/png/512/person.png\" alt=\"\" class=\"circle responsive-img\">\n" +
    "	</div>\n" +
    "		\n" +
    "		<div class=\"col m6 styled\">\n" +
    "			<div class='center red-text'>4536 2736 1027</div>\n" +
    "			<div class=\"center\">Card Number</div>\n" +
    "			</div>\n" +
    "		<div class=\"col m6 styled\">\n" +
    "			<div class='center red-text'>5600</div>\n" +
    "			<div class=\"center\">Points</div>\n" +
    "			</div>\n" +
    "	</div>\n" +
    "	<div class=\"col m9\">\n" +
    "		<ul class=\"small\">\n" +
    "	<li ng-repeat=\"item in activity_feed\">\n" +
    "		<span>{{item.text}}</span>\n" +
    "	</li>\n" +
    "</ul>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("../ng_app/partials/directives/footer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../ng_app/partials/directives/footer.html",
    "<nav class=\"navbar navbar-default footer\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#footer\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"footer\">\n" +
    "            <ul>\n" +
    "                <li><a href=\"\">FAQs</a></li>\n" +
    "                <li><a href=\"\">Terms & Conditions</a></li>\n" +
    "                <li><a href=\"\">Privacy Policy</a></li>\n" +
    "                <li><a href=\"\">&copy;Buymore Kenya</a></li>\n" +
    "                <li class=\"address\"><a>Contact Us </a></li>\n" +
    "                <li><a><i class=\"fa fa-phone\"></i>0725 788 168 </a></li>\n" +
    "                <li><a><i class=\"fa fa-envelope\"></i>hello@buymore.co.ke</a></li>\n" +
    "                <li class=\"social\"><a href=\"https://twitter.com/BuymoreCard\" ><i class=\"ion-social-twitter\"></i></a></li>\n" +
    "                <li class=\"social\"><a href=\"https://www.facebook.com/BuymoreKenya\" ><i class=\"ion-social-facebook\"></i></a></li>\n" +
    "                <li class=\"social\"><a href=\"http://instagram.com/buymorecard\" ><i class=\"ion-social-instagram\"></i></a></li>\n" +
    "                <li class=\"social\"><a href=\"http://ke.linkedin.com/company/buymore\" ><i class=\"ion-social-linkedin\"></i></a></li>\n" +
    "            </ul>\n" +
    "        </div><!-- /.navbar-collapse -->\n" +
    "    </div><!-- /.container-fluid -->\n" +
    "</nav>\n" +
    "");
}]);

angular.module("../ng_app/partials/directives/head.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../ng_app/partials/directives/head.html",
    "");
}]);

angular.module("../ng_app/partials/expenditure/expenditure-category-time.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../ng_app/partials/expenditure/expenditure-category-time.html",
    "<div class=\"card\">\n" +
    "            <div class=\"card-content\">\n" +
    "<canvas id=\"bar\" class=\"chart chart-line\" data=\"spread.data\"\n" +
    "  labels=\"spread.labels\" options=\"spread.options\"></canvas> \n" +
    "  </div>\n" +
    "  </div>");
}]);

angular.module("../ng_app/partials/expenditure/expenditure-category.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../ng_app/partials/expenditure/expenditure-category.html",
    "<div class=\"card\">\n" +
    "            <div class=\"card-content\">\n" +
    "<canvas id=\"bar\" class=\"chart chart-bar\" data=\"spread.data\"\n" +
    "  labels=\"spread.labels\" options=\"graph.options\"></canvas> \n" +
    "  </div>\n" +
    "  </div>");
}]);

angular.module("../ng_app/partials/expenditure/expenditure-feed.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../ng_app/partials/expenditure/expenditure-feed.html",
    "<ul class=\"small\">\n" +
    "	<li ng-repeat=\"item in feed\">\n" +
    "		<span>{{item.text}}</span>\n" +
    "	</li>\n" +
    "</ul>");
}]);

angular.module("../ng_app/partials/expenditure/expenditure-list.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../ng_app/partials/expenditure/expenditure-list.html",
    "<ul class=\"small\">\n" +
    "	<li ng-repeat=\"item in items\">\n" +
    "		<span><i class=\"ion-cash\"></i></span><span>{{item.name}}</span><span class='figure'>{{item.value}}</span>\n" +
    "	</li>\n" +
    "</ul>");
}]);

angular.module("../ng_app/partials/expenditure/expenditure-pie.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../ng_app/partials/expenditure/expenditure-pie.html",
    "<div class=\"card small\">\n" +
    "            <div class=\"card-content\">\n" +
    "              <canvas id=\"doughnut\" class=\"chart chart-doughnut\" data=\"latest.data\" labels=\"latest.labels\" click=\"onClick\" options=\"graph.options\" legend=\"true\"></canvas> \n" +
    "            </div>\n" +
    "          </div>");
}]);

angular.module("../ng_app/partials/expenditure/expenditure-spread.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../ng_app/partials/expenditure/expenditure-spread.html",
    "<div class=\"card\">\n" +
    "            <div class=\"card-content\">\n" +
    "<canvas id=\"bar\" class=\"chart chart-bar\" data=\"spread.data\"\n" +
    "  labels=\"spread.labels\" options=\"graph.options\"></canvas> \n" +
    "  </div>\n" +
    "  </div>");
}]);

angular.module("../ng_app/partials/expenditure/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../ng_app/partials/expenditure/index.html",
    "<div class=\"row inner\">\n" +
    "<h5>How You Spent Your Money</h5>\n" +
    "    <div data-sr=\"enter left, hustle 20px\" class=\"col s12 m4\">\n" +
    "    <div ui-view=\"expenditure-pie\"></div>\n" +
    "    </div>\n" +
    "    <div data-sr=\"enter left, hustle 20px\" class=\"col s12 m4\">\n" +
    "    	<div ui-view=\"expenditure-list\"></div>\n" +
    "    </div>\n" +
    "    <div clasdata-sr=\"enter left, hustle 20px\" s=\"col s12 m4\">\n" +
    "    	<div ui-view=\"expenditure-feed\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "<h5>Money Spread</h5>\n" +
    "    <div data-sr=\"enter left, hustle 20px\" class=\"col l12\">\n" +
    "    <div ui-view=\"expenditure-spread\"></div>\n" +
    "    </div>\n" +
    "    \n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "<h5>What You Spent On</h5>\n" +
    "    <div data-sr=\"enter left, hustle 20px\" class=\"col l12\">\n" +
    "    <div ui-view=\"expenditure-category\"></div>\n" +
    "    </div>\n" +
    "    \n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "<h5>Category vs Time</h5>\n" +
    "    <div data-sr=\"enter left, hustle 20px\" class=\"col l12\">\n" +
    "    <div ui-view=\"expenditure-category-time\"></div>\n" +
    "    </div>\n" +
    "    \n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("../ng_app/partials/pages/about.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../ng_app/partials/pages/about.html",
    "<section>\n" +
    "    <carousel interval=\"2000\">\n" +
    "    <slide ng-repeat=\"slide in slides\" active=\"slide.active\" ng-if=\"slide.path!=''\">\n" +
    "      <p>{{slide.text}}</p>\n" +
    "      <div class=\"carousel-caption\">\n" +
    "        \n" +
    "      </div>\n" +
    "    </slide>\n" +
    "  </carousel>\n" +
    "</section>");
}]);

angular.module("../ng_app/partials/pages/benefits.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../ng_app/partials/pages/benefits.html",
    "<section class=\"full-page\" id=\"benefits\">\n" +
    "        <section class=\"row\" >\n" +
    "            Buymore is a discount card that offers students the chance to save money by getting great deals from stores and brands they love visiting.\n" +
    "            The Buymore Brand Ambassador Program is an opportunity for students to act as liaisons between Buymore and their universities. These ambassadors:\n" +
    "        </section>\n" +
    "        <section class=\"row\">\n" +
    "            <ol>\n" +
    "                <li><div>1</div>Learn about Buymore products</li>\n" +
    "                <li><div>2</div>Educate their fellow students about the Buymore brand and enlighten them how they can benefit from it</li>\n" +
    "                <li><div>3</div>Make money whenever they recommend members to purchase Buymore cards</li>\n" +
    "                <li><div>4</div>Help Buymore understand your university culture</li>\n" +
    "            </ol>\n" +
    "        </section>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("../ng_app/partials/pages/how.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../ng_app/partials/pages/how.html",
    "<section class=\"full-page\" id=\"how\">\n" +
    "        <section class=\"row\">\n" +
    "            <div class=\"tag-line center\" data-start=\"margin-left:-200%\" data-300-top=\"margin-left:0;\">\n" +
    "                <div class=\"card\">\n" +
    "                    <img src=\"assets/images/Buymore-Card.png\" alt=\"\">\n" +
    "                </div>\n" +
    "                <div class=\"inner\">\n" +
    "                    <i class=\"fa fa-quote-left\"></i>Buymore...<br>Setting you up <br> for the future. <i class=\"fa fa-quote-right\"></i><br>\n" +
    "                    <a href=\"#\">Learn More</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"instructions\" data-start=\"margin-left:+200%\" data-300-top=\"margin-left:0;\">\n" +
    "                <h6>HOW TO BE A BUYMORE BRAND AMBASSADOR</h6>\n" +
    "                <ol>\n" +
    "                    <li><div>1</div>Fill out the application form</li>\n" +
    "                    <li><div>2</div>Go through the interview</li>\n" +
    "                    <li><div>3</div>Viola!</li>\n" +
    "                </ol>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "        <section class=\"row\">\n" +
    "            <div class=\"redirect\">\n" +
    "                <a href=\"\" class=\"btn btn-default\">Back to Buymore</a>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "</section>\n" +
    "");
}]);

angular.module("../ng_app/partials/pages/requirements.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../ng_app/partials/pages/requirements.html",
    "<section class=\"full-page\" id=\"requirements\">\n" +
    "    <section class=\"row\">\n" +
    "        To become a Buymore Ambassador, you need to:\n" +
    "        <ol>\n" +
    "            <li><div>1</div>Be a college or university student enrolled in full-time undergraduate study</li>\n" +
    "            <li><div>2</div>Have a Buymore card</li>\n" +
    "            <li><div>3</div>Be familiar with Buymore products and the deals we offer</li>\n" +
    "            <li><div>4</div>Be an active card user</li>\n" +
    "            <li><div>5</div>Be a member of a student organizations or school club</li>\n" +
    "        </ol>\n" +
    "    </section>\n" +
    "</section>\n" +
    "");
}]);

angular.module("../ng_app/partials/pages/signup_form.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../ng_app/partials/pages/signup_form.html",
    "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n" +
    "    <div class=\"modal-dialog\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\" ng-show=\"title\">\n" +
    "                <button type=\"button\" class=\"close\" aria-label=\"Close\" ng-click=\"$hide()\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "                <h4 class=\"modal-title\">{{title}}</h4>\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label>BUYMORE ACCOUNT CARD/PHONE</label>\n" +
    "                    <input placeholder=\"Enter Card or Phone Number Here\" class=\"form-control\" type=\"text\" ng-model=\"ambassador.info\">\n" +
    "                </div>\n" +
    "                <div id=\"alerts\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button type=\"button\" class=\"btn btn-success\" form=\"register\" ng-click=\"apply(ambassador)\">Apply</button>\n" +
    "                <button type=\"button\" class=\"btn btn-danger\" ng-click=\"$hide()\">Close</button>\n" +
    "                <p>Don't have a Buymore Card? <a href=\"http://buymore.co.ke/preorder\" class=\"red\" >Get one now!</a></p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../ng_app/partials/pages/testimonials.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../ng_app/partials/pages/testimonials.html",
    "");
}]);

angular.module("../ng_app/partials/public/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../ng_app/partials/public/header.html",
    "<nav class=\"navbar navbar-default\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "           <!--  <img class=\"img-responsive\" href=\"#\" style=\"width:120px;padding:0\" src=\"assets/images/Buymore-Logo-Transparent.png\" alt=\"Buymore\"> -->\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "        <div class=\"navbar-right collapse navbar-collapse\" id=\"main_nav\">\n" +
    "            <ul id=\"navigation\">\n" +
    "               <!--  <li><a is-active-nav ui-sref=\"about\">ABOUT</a></li>\n" +
    "                <li><a is-active-nav ui-sref=\"how\">HOW</a></li>\n" +
    "                <li><a is-active-nav ui-sref=\"benefits\">BENEFITS</a></li>\n" +
    "                <li><a is-active-nav ui-sref=\"requirements\">REQUIREMENTS</a></li>\n" +
    "                <li><a is-active-nav ui-sref=\"testimonials\">TESTIMONIALS</a></li> -->\n" +
    "                <li class=\"nav-icon\"><a href=\"\"><i class=\"ion-navicon-round\"></i></a></li>\n" +
    "            </ul>\n" +
    "\n" +
    "        </div><!-- /.navbar-collapse -->\n" +
    "    </div><!-- /.container-fluid -->\n" +
    "</nav>\n" +
    "\n" +
    "<script>\n" +
    "    $(document).ready(function(){\n" +
    "\n" +
    "        var canvas = $(\"#canvas_logo\");\n" +
    "        console.log(canvas);\n" +
    "        if(canvas.getContext)\n" +
    "        {\n" +
    "            var ctx = canvas.getContext(\"2d\");\n" +
    "            // Draw triangle\n" +
    "            ctx.fillStyle=\"#e62020\";\n" +
    "            ctx.beginPath();\n" +
    "            // Draw a triangle location for each corner from x:y 100,110 -> 200,10 -> 300,110 (it will return to first point)\n" +
    "            ctx.moveTo(0,0);\n" +
    "            ctx.lineTo(300,0);\n" +
    "            ctx.lineTo(300,90);\n" +
    "            ctx.lineTo(150,120);\n" +
    "            ctx.lineTo(0,90);\n" +
    "            ctx.closePath();\n" +
    "            ctx.fill();\n" +
    "            var image = new Image();\n" +
    "            image.onload = function() {\n" +
    "                ctx.drawImage(image, 20, 10,260,100);\n" +
    "            };\n" +
    "            image.src='assets/images/Buymore-Logo.png';\n" +
    "        }\n" +
    "\n" +
    "    });\n" +
    "</script>\n" +
    "");
}]);

angular.module("../ng_app/partials/public/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../ng_app/partials/public/home.html",
    "<header ui-view=\"header\"></header>\n" +
    "<div ui-view=\"about\" class=\"content red\"></div>\n" +
    "<div ui-view=\"benefits\" class=\"content\"></div>\n" +
    "<div ui-view=\"how\" class=\"content grey\"></div>\n" +
    "<div ui-view=\"requirements\" class=\"content\"></div>\n" +
    "<div ui-view=\"testimonials\" class=\"content grey\"></div>");
}]);
