// I control the main demo.
app.controller("homeCtrl", ['$scope', '$filter', '$timeout', '$state',
  'Restangular', '$http', '$rootScope', '$translate',
  function(scope, filter, timeout, state, Restangular, $http, rootScope,
    translate) {
    scope.lang = 'swa_SWA';
    scope.toggleLanguage = function toggleLanguage(item) {
      translate.use(item);
    };
  }
]);
