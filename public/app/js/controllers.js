blindApp.controller('IndexController', ['$scope', '$state', 'globals', function($scope, $state, globals) {}])

blindApp.controller('HomeController', ['$scope', '$state', '$http', '$sce', 'globals', function($scope, $state, $http, $sce, globals) {
  document.title = 'blindworm - home'; //set the page title

  $http.get('/api/equations')
      .then(function(response){
        $scope.equations = response.data;
      });

  $scope.submitEq = function( obj ){
    $http.post('/api/equation', obj);
  };

  $scope.mathMl = function(returnTrusted, index){
      var blindlyTrusting = returnTrusted[index];
      var asciiMathParser = new AsciiMathParser(document);
      blindlyTrusting = asciiMathParser.parseAsciiMathInput(blindlyTrusting);
      return $sce.trustAsHtml(blindlyTrusting);
  };

}])