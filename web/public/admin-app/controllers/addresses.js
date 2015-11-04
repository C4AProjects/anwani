/**
 * @ngdoc controller
 * @name AddressesCtrl
 * @memberof AdminApp
 * @param $scope {service} controller scope
 * @param $filterFilter {service}
 * @param $http {service} Angular HTTP Request Service
 * @param $rootScope {service} Angular Root Scope Service
 * @param $state {service} UI Router State Service
 */
app.controller('AddressesCtrl', ['$scope', 'filterFilter','$http','$rootScope','$state',
    function (scope, filterFilter,http,rootScope,state) {
        /**
         * Add an address
         * @memberof AddressesCtrl
         * @function add
         */
        scope.add = function add(){
            /**
             * @memberof add
             * @param scope.address {object}
             *
             */
            http.post('http://anwani-devapi.c4asolution.com/addresses/create',scope.address).then(function(result){
                console.log(result);
            });
        };
        /**
         * View an address
         * @memberof AddressesCtrl
         * @function view
         * @param address {object}  Instance of an Address parsed from the table
         */
        scope.view = function view(address){
            rootScope.address=address;
            state.go('app.address.one');
        };
        /**
         * Search for an Address
         * @memberof AddressesCtrl
         * @function search
         */
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
 * @ngdoc runtime
 * @name AddressesCtrlRuntime
 * @memberof AdminApp
 * @param $http {service}
 * @param $rootScope {service}
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
    }
}]);