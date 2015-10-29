var app = angular.module("anwani", ['ui.router', 'restangular', 'smart-table',
  'chart.js', 'textAngular', 'angularMoment', 'ui.bootstrap',
  'highcharts-ng', 'mgcrea.ngStrap.scrollspy',
  'mgcrea.ngStrap.helpers.dimensions', 'duScroll', 'sn.skrollr',
  'pascalprecht.translate', 'ngCookies', ['$translateProvider', function(
    $translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: "/translations/",
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en_US');
    // $translateProvider.useCookieStorage();
  }]
]);

app.config(function(RestangularProvider) {
  // RestangularProvider.setBaseUrl('http://new.buymore.co.ke');
  //  RestangularProvider.setRequestSuffix('.json');
  //  // register german translation table

});


app.run(['$http', '$rootScope', 'snSkrollr', function(
  $http, $rootScope,
  snSkrollr) {
  $rootScope.date = new Date();
  $rootScope.title = 'Anwani';
  $rootScope.messages = [];
  $rootScope.menu = [];
  snSkrollr.init();
  $rootScope.languages = [{
    'label': 'English',
    'value': 'en_US'
  }, {
    'label': 'Francais',
    'value': 'fre_FRE'
  }];

}]);
