
//angular路由
// angular.module("routeApp", ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
//     $routeProvider
//         .when('/login', {templateUrl: 'login.html'})
//         .when('/list', {templateUrl: 'list.html'})
//         .otherwise({redirectTo: '/login'});
// }]);
//

//angular模块
angular.module("App", ['ui.router', 'ngMessages'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');
        $stateProvider
            //登录页面
            .state('login', {
                url: '/login',
                templateUrl: 'login.html'
            })
            //列表页面
            .state('list', {
                url: '/list',
                templateUrl: 'list.html'
            })
            //列表欢迎页面
            .state('list.welcome', {
                url: '/welcome',
                templateUrl: 'welcome.html'
            })
            .state('list.article', {
                url: '/article',
                templateUrl: 'article.html'
            })
    })
    //login控制器
    .controller('logCtrl', function ($scope, $state, $http) {
        $scope.params = {};
            $scope.myLogin = function () {
                $http({
                    method: 'POST',
                    url: '/carrots-admin-ajax/a/login',
                    params: $scope.params
                }).then(function successCallback(response) {
                    console.log(response);
                    if (response.data.code===0){
                        $state.go('list')
                    }else {
                        $('#hint').text(response.data.message);
                    }
                },
                    function (response) {
                        console.log(response);
                    }
                    )
            }
    });

