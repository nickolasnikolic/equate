blindApp.controller('IndexController', ['$scope', '$state', 'globals', function($scope, $state, globals) {}])

blindApp.controller('HomeController', ['$scope', '$state', '$http', 'globals', function($scope, $state, $http, globals) {
  document.title = 'blindworm - home'; //set the page title

  $http.get('/api/equations')
      .then(function(response){
        $scope.equations = response;
      });

  $scope.submitEq = function( obj ){

  };

}])

