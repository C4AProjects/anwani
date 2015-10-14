app.controller('AddressesCtrl', ['$scope', 'filterFilter','$http','$rootScope','$state',
    function (scope, filterFilter,http,rootScope,state) {
        get_addresses();
        scope.add = function add(){
            http.post('http://anwaniapi.mybluemix.net/addresses/create',scope.address).then(function(result){
                console.log(result);
            });
        };
        function get_addresses(){
            http.get('http://anwaniapi.mybluemix.net/users/'+rootScope.user._id+'/addresses',
                scope.address).then(function(result){
                    console.log(result);
                });
        };
        scope.view = function view(address){
            rootScope.address=address;
            state.go('app.address.one');
        };

}]);