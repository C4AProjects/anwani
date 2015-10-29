app.controller('AddressesCtrl', ['$scope', 'filterFilter','$http','$rootScope','$state',
    function (scope, filterFilter,http,rootScope,state) {

        scope.add = function add(){
            http.post('http://anwani-devapi.c4asolution.com/addresses/create',scope.address).then(function(result){
                console.log(result);
            });
        };
        scope.view = function view(address){
            rootScope.address=address;
            state.go('app.address.one');
        };
        scope.search = function search(){
            var criteria,category,search_string={};
            category = scope.search_data.category;
            criteria={};
            search_string=scope.search_data.string;
            criteria[category]=search_string;

            http.get('http://anwani-devapi.c4asolution.com/addresses/search',{params:criteria})
                .then(function(result){
                    scope.results = result.data;
                });
        }

    }]);

/**
 * Get Subscribers on RUN
 */
app.run(['$http','$rootScope',function(http,rootScope){
    get_addresses();
    function get_addresses(){
        if(rootScope.user){
            http.get('http://anwani-devapi.c4asolution.com/addresses',
                {
                    params:{
                        page:1,
                        per_page:10
                    }
                }
            ).then(function(result){
                    rootScope.addresses = result.data.docs;
                });
        }
    };
}]);