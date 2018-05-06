
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
            //后台页面
            .state('list', {
                url: '/list',
                templateUrl: 'list.html'
            })
            //后台欢迎页面
            .state('list.welcome', {
                url: '/welcome',
                templateUrl: 'welcome.html'
            })
            //article列表页面
            .state('list.article', {
                url: '/article',
                templateUrl: 'article.html'
            })
    })
    //login控制器
    .controller('logCtrl', function ($scope, $state, $http) {
        $scope.params = {};
            $scope.myLogin = function () {
                //请求登录
                $http({
                    method: 'POST',
                    url: '/carrots-admin-ajax/a/login',
                    params: $scope.params
                // 登录成功后执行的代码
                }).then(function successCallback(response) {
                    console.log(response);
                    if (response.data.code===0){
                        $state.go('list')
                    }else {
                        $('#hint').text(response.data.message);
                    }
                },
                    //登录失败执行的代码
                    function (response) {
                        console.log(response);
                    }
                    );

                //请求article列表信息
                $http({
                    method: 'GET',
                    url: '/carrots-admin-ajax/a/article/search'
                    //请求成功执行的代码
                }).then(function successCallback(response) {
                    if(response.data.code===0){
                        $scope.lists = response.data.data.articleList;
                        console.log(response);
                        // console.log(lists);
                    }
                    //请求失败执行的代码
                },function errorCallback(response) {
                    console.log(response);
                });
            }
    });

