blindApp.controller('IndexController', ['$scope', '$state', 'globals', function($scope, $state, globals) {}])

blindApp.controller('HomeController', ['$scope', '$state', '$http', 'globals', function($scope, $state, $http, globals) {
  document.title = 'blindworm - home'; //set the page title

  $http.get('/api/equations')
      .then(function(response){
        $scope.equations = response.data;
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
      });

  $scope.submitEq = function( obj ){
    $http.post('/api/equation', obj);
  };

}])

