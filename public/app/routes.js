app.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /state1
  /**
   * Default Route
   * @param  {[type]} "/account/expenditure" [description]
   * @return {[type]}                        [description]
   */
  $urlRouterProvider.otherwise("/login");

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
  $stateProvider.state('test', {
      url: '/test',
      views: {
        '': {
          controller: 'publicCtrl',
          templateUrl: 'app/partials/test/index.html',
        }
      }
    })
    .state('login', {
      url: '/login',
      views: {
        '': {
          controller: 'accountCtrl',
          templateUrl: 'app/partials/account/login.html',
        }
      }
    });
});
