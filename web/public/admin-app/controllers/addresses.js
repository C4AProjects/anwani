app.controller('AddressesCtrl', ['$scope', 'filterFilter','$http','$rootScope',
    function (scope, filterFilter,http,rootScope) {

        scope.add = function add(){
            http.post('http://anwaniapi.mybluemix.net/addresses/create',scope.address).then(function(result){
                console.log(result);
            });
        };
        scope.view = function view(){
            http.get('http://anwaniapi.mybluemix.net/users/'+rootScope.user._id+'/addresses',
                scope.address).then(function(result){
                    console.log(result);
            });
        };
scope.view();

}]);