app.controller('UsersCtrl', ['$scope', 'filterFilter','$http','$rootScope','$state',
    function (scope, filterFilter,http,rootScope,state) {

        scope.add = function add(){
            http.post('http://anwani-devapi.c4asolution.com/users/signup',scope.user).then(function(result){
                console.log(result);
            });
        };
        scope.view = function view(user){
            rootScope.chosenUser=user;
            state.go('app.users.one');
        };
    }]);

/**
 * Get Subscribers on RUN
 */
app.run(['$http','$rootScope',function(http,rootScope){
    get_users();
    function get_users(){
        if(rootScope.user){
            http.get('http://anwani-devapi.c4asolution.com/users?page=1&per_page=10'
            ).then(function(result){
                    rootScope.users = result.data.docs;
                });
        }

    };
}]);