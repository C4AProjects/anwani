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
  'smart-table'
]);

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
    ['localStorageService', '$rootScope','$http',
      function (localStorageService, rootScope,http) {
        var user = localStorageService.get('user');
        var token = localStorageService.get('token');
        rootScope.addresses = [{
          "_id" : "556e1174a8952c9521286a60",
          user: "556e1174a8952c9521286a60",
          short_virtual_code: "MP7H+E2",
          long_virtual_code: "6EAEMMP7H+E2",
          location_pic: "/media/a8952c9521286a60.jpeg",
          latitude: 4.567889,
          longitude: -12.098,
          street_address: "",
          city: "nairobi",
          country: "kenya"
        }];
        rootScope.addresses_shared = [];
        if (user && token) {
          rootScope.user = user;
          rootScope.token = token;
          http.defaults.headers.post = { 'Authorization' : 'Bearer '+localStorageService.get('token') }
        }
      }
    ]);