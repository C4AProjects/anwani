var app = angular.module("buymore", ['ui.router', 'restangular', 'smart-table',
  'chart.js', 'textAngular', 'angularMoment', 'ui.bootstrap',
  'highcharts-ng', 'mgcrea.ngStrap.scrollspy',
  'mgcrea.ngStrap.helpers.dimensions', 'duScroll', 'sn.skrollr'
]);

app.config(function(RestangularProvider) {
  // RestangularProvider.setBaseUrl('http://new.buymore.co.ke');
  //  RestangularProvider.setRequestSuffix('.json');
});


app.run(['$http', '$rootScope', 'snSkrollr', function($http, $rootScope,
  snSkrollr) {
  $rootScope.date = new Date();
  $rootScope.title = 'Anwani';
  $rootScope.messages = [];
  $rootScope.menu = [];
  snSkrollr.init();
}]);
