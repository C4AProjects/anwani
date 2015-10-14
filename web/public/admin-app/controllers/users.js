app.controller('UsersCtrl', ['$scope', 'filterFilter','$http','$rootScope',
    function (scope, filterFilter,http,rootScope) {

        get_users();
        
        scope.add = function add(){
            http.post('http://anwaniapi.mybluemix.net/user/signup',scope.user).then(function(result){
                console.log(result);
            });
        };

        function get_users(){
            http.get('http://anwaniapi.mybluemix.net/users?page=1&per_page=10'
            ).then(function(result){
                    scope.users = result.data;
                    console.log(result);
                });
        };

    }]);