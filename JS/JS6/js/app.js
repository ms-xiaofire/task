

// angular.module("routeApp", ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
//     $routeProvider
//         .when('/login', {templateUrl: 'login.html'})
//         .when('/list', {templateUrl: 'list.html'})
//         .otherwise({redirectTo: '/login'});
// }]);



angular.module("App", ['ui.router'])
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
    });

