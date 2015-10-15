'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('admin', [
    'ngAnimate',
    //    'ngCookies',
    //    'ngResource',
    //    'ngSanitize',
    'ngTouch',
    //    'ngStorage',
    'ui.router',
    'ui.bootstrap',
    // 'ui.utils',
    'ui.load',
    'ui.jq',
    'oc.lazyLoad',
    'perfect_scrollbar',
    'angular-inview',
    'angular-loading-bar',
    'LocalStorageModule',
    'smart-table',
    'permission',
    'uiGmapgoogle-maps'
]);
app.config(function($httpProvider){
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });
app.config(
    ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
        function ($controllerProvider, $compileProvider, $filterProvider, $provide) {

            // lazy controller, directive and service
            app.controller = $controllerProvider.register;
            app.directive = $compileProvider.directive;
            app.filter = $filterProvider.register;
            app.factory = $provide.factory;
            app.service = $provide.service;
            app.constant = $provide.constant;
            app.value = $provide.value;
        }
    ]);

app.run(
    ['localStorageService', '$rootScope','$http','$state',
        function (localStorageService, rootScope,http,state) {


            var user = localStorageService.get('user');
            var token = localStorageService.get('token');
            rootScope.users=[];
            rootScope.subscribers=[];
            rootScope.addresses = [{
                "_id" : "556e1174a8952c9521286a60",
                subscriber: "556e1174a8952c9521286a60",
                short_virtual_code: "MP7H+E2",
                long_virtual_code: "6EAEMMP7H+E2",
                location_pic: "/media/a8952c9521286a60.jpeg",
                latitude: -0.3000,
                longitude: 36.0667,
                street_address: "",
                city: "nakuru",
                country: "kenya"
            },
                {
                    "_id" : "556e1174a8952c9521286a60",
                    subscriber: "556e1174a8952c9521286a60",
                    short_virtual_code: "MP7H+E2",
                    long_virtual_code: "6EAEMMP7H+E2",
                    location_pic: "/media/a8952c9521286a60.jpeg",
                    latitude: -0.7202,
                    longitude: 36.4285,
                    street_address: "",
                    city: "naivasha",
                    country: "kenya"
                }];
            rootScope.addresses_shared = [];

            if (!rootScope.user && !rootScope.token) {

                http.defaults.headers.post = { "Content-Type": "application/json;charset=utf-8"};
                http.defaults.headers.get = { "Content-Type": "application/json;charset=utf-8"};
            }
            if(user && token){
                rootScope.user = user;
                rootScope.token = token;
                http.defaults.headers.post = { 'Authorization' : 'Bearer '+localStorageService.get('token') };
                http.defaults.headers.get = { 'Authorization' : 'Bearer '+localStorageService.get('token') }
            }
            //else{
            //    http.defaults.headers.post = {};
            //    http.defaults.headers.get = {};
            //}


            rootScope.logout = function logout()
            {
                localStorageService.remove('user');
                localStorageService.remove('token');
                state.go('login');
                rootScope.user={};
                http.defaults.headers.post = { "Content-Type": "application/json;charset=utf-8"};
                http.defaults.headers.get = { "Content-Type": "application/json;charset=utf-8"};

            };
            if(rootScope.user){
                //console.log(rootScope.user);
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
            }


            rootScope.state = state;
            //console.log(rootScope.state.$current);
            //if(rootScope.state.$current.url.source.search('/new')<0
            //        &&
            //        rootScope.subscriber.role!="admin"){
            //  state.go('login');
            //}
        }
    ]);