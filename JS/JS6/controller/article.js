
//article列表控制器
angular.module('App')
.controller('artCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state, $stateParams) {
    $scope.searchParams = $stateParams;

    //get article列表
    $http({
        method: 'GET',
        url: '/carrots-admin-ajax/a/article/search',
        params: $scope.params
        //请求成功执行的代码
    }).then(function successCallback(response) {
        if(response.data.code===0){
            console.log(response);
            //article列表
            $scope.lists = response.data.data.articleList;
            $scope.total = response.data.data.total;
            //分页
            $scope.totalItems = 64;
            $scope.currentPage = 4;

            $scope.maxSize = 5;
            $scope.bigTotalItems = $scope.total;
            $scope.bigCurrentPage = 1;

            $scope.page = function(page) {
                $scope.bigCurrentPage = page;
                $http({
                    method: 'GET',
                    params: {page:$scope.bigCurrentPage},
                    url: '/carrots-admin-ajax/a/article/search'
                    //请求成功执行的代码
                }).then(function successCallback(response) {
                    $scope.lists = response.data.data.articleList;
                })
            };
        }
        // 请求失败执行的代码
    },function errorCallback(response) {
        console.log(response);
    });

    //日期插件
    //格式化日期
    $scope.format = 'yyyy/MM/dd';
    //手动输入日期的格式
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

    $scope.params = {};
    //搜索
    $scope.search = function () {

        if($scope.params.startAt){
            $scope.params.startAt = $scope.params.startAt.valueOf();
        }
        if($scope.params.endAt){
            $scope.params.endAt = $scope.params.endAt.valueOf();
        }
        $http({
            method: 'GET',
            url: '/carrots-admin-ajax/a/article/search',
            params: $scope.params
            //请求成功执行的代码
        }).then(function successCallback(response) {
            $scope.lists = response.data.data.articleList;
        })
    };

    //清空
    // $scope.clear = function () {
    //
    // };
}]);

