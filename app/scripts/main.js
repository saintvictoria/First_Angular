(function (){

  angular.module('PeopleList', ['ngRoute'])

  .config( function ($routeProvider) {

    $routeProvider.when('/', {
      templateUrl: 'templates/list-template.html',
      controller: 'PersonController'
    });

    $routeProvider.when('/about', {
      templateUrl: 'templates/about-template.html',
      controller: 'AboutController'
    });

    $routeProvider.otherwise({
      templateUrl: 'templates/other-template.html',
      controller: 'OtherController'
    });

  });

}());







