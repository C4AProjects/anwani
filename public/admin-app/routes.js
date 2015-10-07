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
      });
  }
])
