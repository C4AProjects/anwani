'use strict';

/* Controllers */
// signin controller
app.controller('LoginFormController', ['$scope', '$http', '$state', 'localStorageService', '$rootScope',
    function (scope, http, state, localStorageService, rootScope) {
        scope.user = {};
        scope.authError = null;
        scope.login = function () {
            scope.authError = null;
            // Try to login
            http.post('http://anwaniapi.mybluemix.net/users/login', scope.user)
                .then(function (response) {
                    console.log(response.data);
                    if (!response.data.user) {
                        scope.authError = 'Phone Number or Password not right';
                    } else {
                        rootScope.user = response.user;
                        localStorageService.set('user', response.user);
                        rootScope.token = response.token;
                        localStorageService.set('token', response.token);
                        state.go('app.dashboard');
                    }
                }, function (x) {
                    scope.authError = 'Server Error';
                });
    };
    }])
;