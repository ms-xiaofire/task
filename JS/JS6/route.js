angular.module('App')
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider) {
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
                        'css/article.css',
                        'controller/article.js'
                    ])
                }
            })
    });