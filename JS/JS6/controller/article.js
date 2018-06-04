
//article列表控制器
angular.module('App')
.controller('artCtrl', function ($scope, $http, $state, $stateParams) {

    $scope.param = {};

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

    //日期插件
    //格式化日期
    $scope.format1 = 'yyyy/MM/dd';
    $scope.format2 = 'yyyy/MM/dd';
    //手动输入日期的格式
    $scope.altInputFormats = ['yyyy/M!/d!'];

    //设置可选日期范围
    $scope.dateOptions1 = {
        maxDate: new Date()
    };
    $scope.dateOptions2 = {
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

    //分页
    $scope.totalItems = 64;
    $scope.currentPage = 4;

    $scope.maxSize = 5;
    $scope.bigTotalItems = $scope.total;
    $scope.param.bigCurrentPage = 1;

    //get article列表
    $http({
        method: 'GET',
        url: '/carrots-admin-ajax/a/article/search',
        params: {
            startAt: $stateParams.startAt,
            endAt: $stateParams.endAt,
            type: $stateParams.type,
            status: $stateParams.status,
            page: $stateParams.page
        }
        //请求成功执行的代码
    }).then(function successCallback(response) {
        if(response.data.code===0){

            //article列表
            $scope.lists = response.data.data.articleList;
            $scope.total = response.data.data.total;


            //跳页后渲染日期
            if($stateParams.startAt){
                var date1 = new Date(parseInt($stateParams.startAt));
                Y1 = date1.getFullYear() + '/';
                M1 = (date1.getMonth()+1 < 10 ? '0'+(date1.getMonth()+1) : date1.getMonth()+1) + '/';
                D1 = date1.getDate();
                $scope.param.startAt = new Date(Y1+M1+D1);
                // $('#testDate1').datepicker('setDate', new Date(Y1+M1+D1));
            }
            if($stateParams.endAt){
                var date2 = new Date(parseInt($stateParams.endAt)-86399999);
                Y2 = date2.getFullYear() + '/';
                M2 = (date2.getMonth()+1 < 10 ? '0'+(date2.getMonth()+1) : date2.getMonth()+1) + '/';
                D2 = date2.getDate();
                $scope.param.endAt = new Date(Y2+M2+D2);
                // $('#testDate2').datepicker('setDate', new Date(Y2+M2+D2));
            }
            //跳页后渲染type
            if($stateParams.type){
                $scope.param.type = parseInt($stateParams.type);
            }
            //跳页后渲染status
            if($stateParams.status){
                $scope.param.status = parseInt($stateParams.status);
            }
            //跳页后渲染页数
            if($stateParams.page){
                $scope.param.bigCurrentPage = $stateParams.page;
            }
            //翻页
            $scope.page = function() {
                $state.go('list.article', {page: $scope.param.bigCurrentPage});
            };
        }
        // 请求失败执行的代码
    },function errorCallback(response) {
        console.log(response);
    });


    //搜索
    $scope.search = function () {
        if($scope.param.startAt){
            $scope.param.startAt = $scope.param.startAt.valueOf();
        }
        if($scope.param.endAt){
            $scope.param.endAt = $scope.param.endAt.valueOf()+86399999;
        }
        if($scope.param.endAt-$scope.param.startAt>=0||$scope.param.endAt==null||$scope.param.startAt==null){
            $state.go('list.article', {
                startAt: $scope.param.startAt,
                endAt: $scope.param.endAt,
                type: $scope.param.type,
                status: $scope.param.status,
                page: $scope.param.bigCurrentPage
            });
        }else {
            bootbox.alert('截至时间必须大于或等于开始时间!');
            $scope.param.startAt='';
            $scope.param.endAt = '';
        }
    };
    //清空
    $scope.clear = function () {
        $scope.param = '';
    };

    //新增页面
    $scope.add = function () {
        $state.go('list.add', {id: 1});
    };
    //上线下线
    $scope.afk = function (id, status) {
        id = this.lis.id;
        status = this.lis.status;
        if(status === 1){
            bootbox.confirm("上线后该图片将在轮播banner中展示,是否执行上线操作?", function (result) {
                if(result){
                    $http({
                        method: 'PUT',
                        url: '/carrots-admin-ajax/a/u/article/status?id='+id+'&status=2'
                    }).then(function (data) {
                        if(data.data.code === 0){
                            bootbox.alert("上线成功!");
                            $state.reload('list.article');
                        }else {
                            alert(data.data.message);
                        }
                    })
                }else {
                    return
                }
            })
        }else {
            if(status === 2){
                bootbox.confirm("下线后该图片将不再展示在轮播banner中,是否执行下线操作?", function (result) {
                    if(result){
                        $http({
                            method: 'PUT',
                            url: '/carrots-admin-ajax/a/u/article/status?id='+id+'&status=1'
                        }).then(function (data) {
                            if(data.data.code === 0){
                                bootbox.alert("下线成功!");
                                $state.reload('list.article');
                            }else {
                                console.log(data);
                            }
                        })
                    }else {
                        return
                    }
                })
            }
        }
    };
    //编辑
    $scope.compile = function (id) {
        id = this.lis.id;
        $state.go('list.add', {id: id});
    };
    //删除
    $scope.delete = function (id) {
        id = this.lis.id;
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
    };
});

