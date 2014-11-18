(function (){

  angular.module('PeopleList')

  .controller('PersonController', ['$scope', function ($scope) {

    $scope.people = [
      {
        name: 'Tim',
        age: 31,
        test: true
      },
      {
        name: 'Bob',
        age: 45,
        test: false
      },
      {
        name: 'Sam',
        age: 113,
        test: true
      }
    ];

    $scope.hello = function (n, i) {
      if($scope.people[i].name === 'Tim') {
        alert('go away');
      } else {
        alert('Hi there ' + n + ' and I am number ' + i);
      }
    };

  }]);

}());