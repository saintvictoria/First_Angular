(function (){

  angular.module('PeopleList')

  .controller('ListController', 
    ['$scope', '$http', '$location', '$window', function ($scope, $http, $location, $window) {

    $window.url = 'http://tiy-atl-fe-server.herokuapp.com/collections/ngpeople/'; 

    $http.get(url).success( function (results){
      $scope.people = results;
    });

    $scope.viewMore = function (person) {
      $location.path('/single/' + person._id);
    };


  }]);

}());