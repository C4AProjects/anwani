app.controller('AddressesCtrl', ['$scope', 'filterFilter','$http','$rootScope','$state',
    function (scope, filterFilter,http,rootScope,state) {

        scope.add = function add(){
            http.post('http://anwaniapi.mybluemix.net/addresses/create',scope.address).then(function(result){
                console.log(result);
            });
        };
        scope.view = function view(address){
            rootScope.address=address;
            state.go('app.address.one');
        };

    }]);

/**
 * Get Subscribers on RUN
 */
app.run(['$http','$rootScope',function(http,rootScope){
    get_addresses();
    function get_addresses(){
        if(rootScope.user){
            http.get('http://anwani-devapi.c4asolution.com/users/'+rootScope.user._id+'/addresses'
            ).then(function(result){
                    rootScope.addresses = result.data.docs;
                });
        }

    };
}]);