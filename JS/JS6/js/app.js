

angular.module("routeApp", ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/login', {templateUrl: 'login.html'})
        .when('/list', {templateUrl: 'list.html'})
        .otherwise({redirectTo: '/login'});
}])
.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});
