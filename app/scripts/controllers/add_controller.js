(function () {

  angular.module('PeopleList')
  .controller('AddController', 
    ['$scope', '$http', '$location', '$window', function ($scope, $http, $location, $window) {

    $scope.person = {};

    $scope.addPerson = function () {

      $http.post($window.url, $scope.person).success( function (data) {
        $location.path('/');
      });

    };

  }]);


}());