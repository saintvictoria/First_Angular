(function (){

  angular.module('PeopleList')

  .controller('AboutController', ['$scope', function ($scope) {

    $scope.aboutText = "Hi, my name is Tim and I live in Georgia!";

  }]);

}());