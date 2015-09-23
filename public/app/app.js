var app = angular.module("buymore", ['ui.router', 'restangular', 'smart-table',
  'chart.js', 'textAngular', 'angularMoment', 'ui.bootstrap',
  'highcharts-ng', 'mgcrea.ngStrap.scrollspy',
  'mgcrea.ngStrap.helpers.dimensions', 'duScroll', 'sn.skrollr',
  'pascalprecht.translate', 'ngCookies', ['$translateProvider', function(
    $translateProvider) {
    // register german translation table
    $translateProvider.translations('de_DE', {
      'Welcome': 'Willkommen in Anwani',
      'Welcome-Description': 'The APP that allows you to create a real address in less than a minute...'
    });
    // register english translation table
    $translateProvider.translations('en_EN', {
      'Welcome': 'Welcome to Anwani',
      'Welcome-Description': 'The APP that allows you to create a real address in less than a minute...',
      'Simple': "It's simple",
      'Create Address': 'Create your address or view existing ones'

    });
    $translateProvider.translations('swa_SWA', {
      'Welcome': 'Karibu Anwani',
      'Welcome-Description': 'APP inayoruhusu kujenga anuani ya kweli katika chini ya dakika ...',
      'Simple': "Ni rahisi",
      'Create Address': 'Kujenga anwani yako au mtazamo zilizopo'
    });
    // which language to use?
    $translateProvider.preferredLanguage('swa_SWA');
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
    'label': 'en_EN',
    'value': 'en_EN'
  }, {
    'label': 'swa_SWA',
    'value': 'swa_SWA'
  }];

}]);
