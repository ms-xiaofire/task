
//article列表控制器
angular.module('App')
.controller('artCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
    //日期插件
    // $scope.dat = new Date();
    $scope.dat = '';
    $scope.dat_ = '';
    $scope.enddat = '';
    $scope.format = 'yyyy/MM/dd';
    $scope.altInputFormats = ['yyyy/M!/d!'];

    $scope.popup1 = {
        opened: false
    };
    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };
    $scope.popup2 = {
        opened: false
    };
    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };

    //按日期搜索


    //getarticle列表
    $http({
        method: 'GET',
        url: '/carrots-admin-ajax/a/article/search'
        //请求成功执行的代码
    }).then(function successCallback(response) {
        if(response.data.code===0){
            console.log(response);
            //article列表
            $scope.lists = response.data.data.articleList;

            //分页
            //总数
            $scope.totalItems = response.data.data.total;
            //每页显示数量
            $scope.iteamsPerpage = 10;
            //实际页数
            $scope.totalPage = Math.ceil($scope.totalItems/$scope.iteamsPerpage);
            //最大页数
            $scope.maxSize = 10;
            //当前页
            $scope.currentPage = '';
            console.log($scope.currentPage);
            //页数变化时执行的函数
            $scope.page = function (page) {
                $scope.currentPage = page;
                console.log($scope.currentPage);

                $http({
                    method: 'GET',
                    url: '/carrots-admin-ajax/a/article/search?page='+$scope.currentPage
                    //请求成功执行的代码
                }).then(function successCallback(response) {
                    $scope.lists = response.data.data.articleList;
                })
            }
        }
        // 请求失败执行的代码
    },function errorCallback(response) {
        console.log(response);
    });
}]);

