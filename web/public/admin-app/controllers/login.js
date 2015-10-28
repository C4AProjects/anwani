'use strict';

/* Controllers */
// signin controller
app.controller('LoginFormController', ['$scope', '$http', '$state', 'localStorageService', '$rootScope','Permission',
    function (scope, http, state, localStorageService, rootScope,Permission) {
        scope.subscriber = {};
        rootScope._subscriber = false;
        rootScope._admin = false;
        scope.authError = null;
        scope.login = function () {
            scope.authError = null;
            // Try to login
            http.post('http://anwani-devapi.c4asolution.com/subscribers/login', scope.subscriber)
                .then(function successCallback(response) {
                    if (!response.data.subscriber) {
                        scope.authError = 'Email or Password not right';
                    } else {
                        //console.log(response.data.subscriber);
                        // User Object
                        rootScope.user = response.data.subscriber;
                        localStorageService.set('user', response.data.subscriber);

                        // Token Object
                        rootScope.token = response.data.token;
                        localStorageService.set('token', response.data.token);

                        http.defaults.headers.post = { 'Authorization' : 'Bearer '+localStorageService.get('token') };
                        http.defaults.headers.get = { 'Authorization' : 'Bearer '+localStorageService.get('token') }

                        if (rootScope.user.role) {
                            if (rootScope.user.role == "subscriber") {
                                rootScope._subscriber = true;
                                rootScope._admin = false;
                            }
                            else if (rootScope.user.role == "admin") {
                                rootScope._admin = true;
                                rootScope._subscriber = false;
                            }
                        }
                        state.go('app.dashboard');
                    }
                }, function errorCallback(x) {
                    scope.authError = 'Server Error';
                });

    };
    }])
;