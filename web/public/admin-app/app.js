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
    ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$httpProvider',
      function ($controllerProvider, $compileProvider, $filterProvider, $provide, $httpProvider) {

      // lazy controller, directive and service
      app.controller = $controllerProvider.register;
      app.directive = $compileProvider.directive;
      app.filter = $filterProvider.register;
      app.factory = $provide.factory;
      app.service = $provide.service;
      app.constant = $provide.constant;
      app.value = $provide.value;


        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.withCredentials = true;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    }
  ]);
