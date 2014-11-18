(function () {
  
  angular.module('PeopleList')
  .controller('SingleController', 
    ['$scope', '$routeParams', '$http', '$window', function ($scope, $routeParams, $http, $window) {

      $http.get($window.url + $routeParams.pid).success( function (data) {
        $scope.person = data;
      });

  }]);
  
}());