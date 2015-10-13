'use strict';

/* Controllers */
// signin controller
app.controller('LoginFormController', ['$scope', '$http', '$state', 'localStorageService', '$rootScope',
    function (scope, http, state, localStorageService, rootScope) {
        scope.subscriber = {};
        rootScope.subscriber = false;
        rootScope.admin = false;
        scope.authError = null;
        scope.login = function () {
            scope.authError = null;
            // Try to login
            http.post('http://anwani-devapi.c4asolution.com/subscribers/login', scope.subscriber)
                .then(function (response) {
                    if (!response.data.subscriber) {
                        scope.authError = 'Email or Password not right';
                    } else {
                        console.log(response.data.subscriber);
                        rootScope.subscriber = response.data.subscriber;
                        localStorageService.set('subscriber', response.data.subscriber);
                        rootScope.token = response.data.token;
                        localStorageService.set('token', response.data.token);


                        if (rootScope.subscriber.role) {
                            if (rootScope.subscriber.role == "subscriber") {
                                rootScope.subscriber = true;
                                rootScope.admin = false;
                            }
                            else if (rootScope.subscriber.role == "admin") {
                                rootScope.admin = true;
                                rootScope.subscriber = false;
                            }
                        }
                        state.go('app.dashboard');
                    }
                }, function (x) {
                    scope.authError = 'Server Error';
                });
    };
    }])
;