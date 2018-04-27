

angular.module("routeApp", ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/login', {templateUrl: 'login.html'})
        .when('/list', {templateUrl: 'list.html'})
        .otherwise({redirectTo: '/login'});
}]);

