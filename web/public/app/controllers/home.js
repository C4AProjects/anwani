// I control the main demo.
app.controller("homeCtrl", ['$scope', '$filter', '$timeout', '$state',
  'Restangular', '$http', '$rootScope', '$translate',
  function(scope, filter, timeout, state, Restangular, $http, rootScope,
    translate) {
    scope.lang = 'en_US';
    scope.toggleLanguage = function toggleLanguage(item) {
      translate.use(item);
      rootScope.currentLanguage=item;
      console.log(rootScope.currentLanguage)
    };

    scope.features=[
      {
        title:'Free Registration',
        
        citizen:true,
        business:true,
        government:true
      },
      {
        title:'Create Address',
        
        citizen:true,
        business:true,
        government:true
      },
      {
        title:'Manage Address',
        
        citizen:true,
        business:true,
        government:true
      },
      {
        title:'Customize Address',
        
        citizen:false,
        business:true,
        government:true
      },
      {
        title:'Basic Dashboard',
        
        citizen:true,
        business:true,
        government:true
      },
      {
        title:'Advanced Dashboard',
        
        citizen:false,
        business:true,
        government:true
      },
      {
        title:'Advanced Analytics',
        
        citizen:false,
        business:true,
        government:true
      },
      {
        title:'Share Address',
        
        citizen:true,
        business:true,
        government:true
      },
      {
        title:'Add Maps View',
        
        citizen:true,
        business:true,
        government:true
      },
      {
        title:'App Assistance',
        
        citizen:false,
        business:true,
        government:false
      },
      {
        title:'Database Access/Storage',
        
        citizen:false,
        business:true,
        government:true
      },
      {
        title:'Multi Location Management',
        
        citizen:false,
        business:true,
        government:true
      },
      {
        title:'Population Data Tool',
        
        citizen:false,
        business:false,
        government:true
      }
    ]
  }
]);
