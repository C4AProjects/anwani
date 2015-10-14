app.controller('SubscribersCtrl', ['$scope', 'filterFilter','$http','$rootScope','$state',
    function (scope, filterFilter,http,rootScope,state) {


        get_subscribers();
        scope.add = function add(){
            http.post('http://anwaniapi.mybluemix.net/subscriber/signup',scope.subscriber).then(function(result){
                console.log(result);
            });
        };

        function get_subscribers(){
            http.get('http://anwaniapi.mybluemix.net/subscribers?page=1&per_page=10'
            ).then(function(result){
                    scope.subscribers = result.data;
                    console.log(result);
                });
        };

        scope.view = function view(subscriber){
            rootScope.subscriber=subscriber;
            state.go('app.subscriber.one');
        };

    }]);