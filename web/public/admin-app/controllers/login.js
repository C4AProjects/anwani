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
                    if (!response.data.user) {
                        scope.authError = 'Phone Number or Password not right';
                    } else {
                        rootScope.user = response.data.user;
                        localStorageService.set('user', response.data.user);
                        rootScope.token = response.data.token;
                        localStorageService.set('token', response.data.token);
                        state.go('app.dashboard');
                    }
                }, function (x) {
                    scope.authError = 'Server Error';
                });
    };
    }])
;