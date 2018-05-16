

//入口模块
angular.module("App", ['ui.router', 'ngMessages', 'oc.lazyLoad', 'ui.bootstrap']);
    /*.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider) {
        //封装懒加载
        var _lazyLoad = function (loaded) {
            return function ($ocLazyLoad) {
                return $ocLazyLoad.load(loaded, {serie: true})
            }
        };

        $ocLazyLoadProvider.config({
            debug: false,
            events: true
        });
        //默认打开页面
        $urlRouterProvider.otherwise('/login');
        //配置路由页面
        $stateProvider
            //登录页面
            .state('login', {
                url: '/login',
                controller: 'logCtrl',
                templateUrl: 'html/login.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'css/login.css',
                        'controller/login.js'
                    ])
                }
            })
            //后台页面
            .state('list', {
                url: '/list',
                controller: 'listCtrl',
                templateUrl: 'html/list.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'component/menu/htmleaf-demo.css',
                        'component/menu/nav.css',
                        'component/menu/iconfont.css',
                        'css/list.css',
                        'controller/list.js'
                    ])
                }
            })
            //后台欢迎页面
            .state('list.welcome', {
                url: '/welcome',
                controller: 'welCtrl',
                templateUrl: 'html/welcome.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'css/welcome.css'
                    ])
                }
            })
            //article列表页面
            .state('list.article', {
                url: '/article',
                controller: 'artCtrl',
                templateUrl: 'html/article.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'component/bootstrap/bootstrap.min.css',
                        'css/article.css',
                        'component/bootstrap/bootstrap.min.js',
                        'controller/article.js'
                    ])
                }
            })
    });*/







   /* //login控制器
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
                        console.log($scope.lists);
                        // console.log(lists);
                    }
                    //请求失败执行的代码
                },function errorCallback(response) {
                    console.log(response);
                });
            }
    });

*/