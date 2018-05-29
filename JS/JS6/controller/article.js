
//article列表控制器
angular.module('App')
.controller('artCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state, $stateParams) {

    $scope.typeData = [
        {name: '首页banner', value: 0},
        {name: '精英banner', value: 1},
        {name: '职业banner', value: 2},
        {name: '行业大图', value: 3}
    ];
    $scope.statusData = [
        {name: '草稿', value: 1},
        {name: '上线', value: 2}
    ];
    //get article列表
    $http({
        method: 'GET',
        url: '/carrots-admin-ajax/a/article/search',
        params: $scope.params
        //请求成功执行的代码
    }).then(function successCallback(response) {
        if(response.data.code===0){
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

    //设置可选日期范围
    $scope.dateOptions1 = {
        maxDate: new Date()
    };
    $scope.dateOptions2 = {
        minDate: $scope.startAt,
        maxDate: new Date()
    };

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
            // $scope.params.endAt = $scope.params.endAt.valueOf();
            if($scope.params.startAt !== $scope.params.endAt){
                $scope.params.endAt = $scope.params.endAt.valueOf();
            }else {
                $scope.params.endAt = $scope.params.startAt.valueOf()+86399000;
            }
        }

        $http({
            method: 'GET',
            url: '/carrots-admin-ajax/a/article/search',
            params: {
                type: $scope.params.type,
                status: $scope.params.status,
                startAt: $scope.params.startAt,
                endAt: $scope.params.endAt
            }
            //请求成功执行的代码
        }).then(function successCallback(response) {
            $scope.lists = response.data.data.articleList;
        })
    };
    //清空
    $scope.clear = function () {
        $scope.params.startAt = '';
        $scope.params.endAt = '';
    };

    //新增页面
    $scope.add = function () {
        $state.go('list.add', {id: 1});
    };
    //上线下线
    $scope.afk = function (id, status) {
        id = this.lis.id;
        status = this.lis.status;
        console.log(id);
        console.log(status);
        // $http({
        //     method: 'PUT',
        //     url: '/carrots-admin-ajax/a/u/article/status'
        //     //请求成功执行的代码
        // }).then(function successCallback() {
        //     $state.reload('list.article');
        // })
    };
    //编辑
    $scope.compile = function (id) {
        id = this.lis.id;
        $state.go('list.add', {id: id});
    };
    //删除
    $scope.delete = function (id) {
        id = this.lis.id;
        bootbox.setLocale("zn_CN");
        bootbox.confirm("确定删除?", function (result) {
            if(result){
                $http({
                    method: 'delete',
                    url: '/carrots-admin-ajax/a/u/article/'+id
                    //请求成功执行的代码
                }).then(function successCallback() {
                    $state.reload('list.article');
                })
            }else {
                return;
            }
        });
    }
}]);

