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
  'LocalStorageModule'
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
        rootScope.addresses = [];
        rootScope.addresses_shared = [];
        if (user && token) {
          rootScope.user = user;
          rootScope.token = token;
          http.defaults.headers.post = { 'Authorization' : 'Bearer '+localStorageService.get('token') }
        }
      }
    ]);