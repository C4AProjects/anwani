'use strict';

// signup controller
app.controller('RegisterFormController', ['$scope', '$http', '$state', 'localStorageService', '$rootScope',
    function (scope, http, state, localStorageService, rootScope) {
        scope.user = {};
        scope.authError = null;
        scope.register = function () {
            scope.authError = null;
      // Try to create
            http.post('http://anwaniapi.mybluemix.net/users/signup', scope.user)
      .then(function(response) {
        if ( !response.data.user ) {
            scope.authError = response;
        }else{
            rootScope.newUser = response.user;
            state.go('app.dashboard');
        }
      }, function(x) {
                    scope.authError = 'Server Error';
      });
    };
  }])
 ;