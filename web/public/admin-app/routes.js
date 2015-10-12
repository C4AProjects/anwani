app.config(['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
  function($stateProvider, $urlRouterProvider, JQ_CONFIG) {

    // For any unmatched url, redirect to /state1
    /**
     * Default Route
     * @param  {[type]} "/account/expenditure" [description]
     * @return {[type]}                        [description]
     */
    $urlRouterProvider.otherwise("/dashboard");

    // Now set up the states
    /**
     * [state description]
     * @param  {[type]} 'test'       [description]
     * @param  {[type]} {                                                            url: '/test' [description]
     * @param  {[type]} views:       {                                                                          '':           {        controller: 'publicCtrl' [description]
     * @param  {[type]} templateUrl: 'app/partials/public/index.html' [description]
     * @param  {[type]} }                                                            }            }             [description]
     * @return {[type]}              [description]
     */
    $stateProvider.state('app', {
        templateUrl: '../admin-app/partials/app.html'
      })
        .state('app.dashboard', {
          url: '/dashboard',
          templateUrl: '../admin-app/partials/app_dashboard.html'
          //resolve: {
          //  deps: ['$ocLazyLoad',
          //    function($ocLazyLoad) {
          //      return $ocLazyLoad.load('chart.js').then(
          //        function() {
          //          return $ocLazyLoad.load(
          //            'js/controllers/dashboard.js');
          //        }
          //      );
          //    }
          //  ]
          //}
        })
        .state('app.profile', {
            url: '/profile',
            templateUrl: '../admin-app/partials/ui-profile.html'
        })
        .state('login', {
          url: '/login',
          templateUrl: '../admin-app/partials/ui-login.html'
        })
        .state('access',{

        })
        .state('register', {
          url: '/register',
          templateUrl: '../admin-app/partials/ui-register.html'
        })
        .state('forgot', {
          url: '/forgot',
          templateUrl: '../admin-app/partials/ui-forgotpwd.html'
        })
        .state('app.address', {
          url:'/address',
          controller:'AddressesCtrl',
          templateUrl:'../admin-app/partials/address.html'
        })
        .state('app.address.new', {
          url: '/new',
          templateUrl: '../admin-app/partials/address-add.html'
        })
        .state('app.address.view', {
          url: '/view',
          templateUrl: '../admin-app/partials/address-view.html'
        })
    ;
  }
]);
