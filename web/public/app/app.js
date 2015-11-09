/**
 * @ngdoc app ClientApp
 * @name AnwaniPublic
 */
//    TODO(Rufus): Complete all JsDocs for the Angular Code
var app = angular.module("ClientApp",
    ['ui.router',
      'restangular',
      'smart-table',
      'chart.js',
      'textAngular',
      'angularMoment',
      'ui.bootstrap',
      'highcharts-ng',
      'mgcrea.ngStrap.scrollspy',
      'mgcrea.ngStrap.helpers.dimensions',
      'duScroll', 'sn.skrollr',
      'pascalprecht.translate',
      'ngCookies',
      ['$translateProvider', function(
          $translateProvider) {
        $translateProvider.useStaticFilesLoader({
          prefix: "/translations/",
          suffix: '.json'
        });
        $translateProvider.preferredLanguage('en_US');
        // $translateProvider.useCookieStorage();
      }]
    ]);


/**
 * @memberof ClientApp
 * @name MainRuntime
 * @param $http
 * @param $rootScopr
 * @param snSkrollr
 */
app.run(['$http', '$rootScope', 'snSkrollr','$translate', function(
    $http, $rootScope,
    snSkrollr ,$translate) {
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

    $rootScope.currentLanguage = $translate.proposedLanguage();

}]);
