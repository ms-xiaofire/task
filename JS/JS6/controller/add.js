
angular.module('App')
.controller('addCtrl', function ($scope, $state, FileUploader, $http, $stateParams,) {

    $scope.typeData = [
        {name: '首页banner', value: 0},
        {name: '职位banner', value: 1},
        {name: '精英banner', value: 2},
        {name: '行业大图', value: 3}
    ];
    $scope.industryData = [
        {name: '移动互联网', value: 0},
        {name: '电子商务', value: 1},
        {name: '企业服务', value: 2},
        {name: 'O2O', value: 3},
        {name: '教育', value: 4},
        {name: '金融', value: 5},
        {name: '游戏', value: 6}
    ];

    //wangEditor富文本编辑器
    var E = window.wangEditor;
    var editor = new E('#wEditor');
    // 或者 var editor = new E( document.getElementById('editor') )
    editor.create();


    //上传图片
    var uploader = $scope.uploader = new FileUploader();
    uploader.url = '/carrots-admin-ajax/a/u/img/task';

    uploader.onSuccessItem = function(data,fileItem) {
        $scope.imageSrc1 = fileItem.data.url;
    };

    $scope.id=$stateParams.id;

    $scope.param = {};

    //新增article
    if($scope.id == 1){
        $scope.head = "新增Article";
        //立即上线
        $scope.online = function () {
            $scope.param.img = $scope.imageSrc1;
            $scope.param.status = 2;
            $scope.param.content = editor.txt.html();

            $http({
                method: 'POST',
                url: '/carrots-admin-ajax/a/u/article',
                params: $scope.param
            }).then(function (data) {
                if(data.status === 200){
                    $state.go('list.article');
                    bootbox.alert("新增成功!");
                }else {
                    bootbox.alert(data.message);
                }
            })
        };

        //存为草稿
        $scope.draft = function () {
            $scope.param.img = $scope.imageSrc1;
            $scope.param.status = 1;
            $scope.param.content = editor.txt.html();

            $http({
                method: 'POST',
                url: '/carrots-admin-ajax/a/u/article',
                params: $scope.param
            }).then(function (data) {
                if(data.status === 200){
                    $state.go('list.article');
                    bootbox.alert("新增成功!");
                }else {
                    bootbox.alert(data.message);
                }
            })
        }

    //编辑article
    }else {
        $scope.head = "编辑Article";
        id = $scope.id;

        $http({
            method: 'GET',
            url: '/carrots-admin-ajax/a/article/'+id
        }).then(function (response) {
            if(response.data.code === 0){
                $scope.param = response.data.data.article;
                $scope.imageSrc1 = $scope.param.img;
                console.log($scope.param.content);
                editor.txt.html($scope.param.content);
            }
        }, function (response) {
            console.log(response);
        });

        //立即上线
        $scope.online = function () {
            $scope.param.img = $scope.imageSrc1;
            $scope.param.status = 2;
            $scope.param.createAt = 1;
            $scope.param.content = editor.txt.html();

            $http({
                method: 'PUT',
                url: '/carrots-admin-ajax/a/u/article/'+id,
                params: $scope.param
            }).then(function (data) {
                if(data.status === 200){
                    $state.go('list.article');
                    bootbox.alert("编辑成功!")
                }else {
                    bootbox.alert(data.message);
                }
            })
        };

        //存为草稿
        $scope.draft = function () {
            $scope.param.img = $scope.imageSrc1;
            $scope.param.status = 1;
            $scope.param.createAt = new Date().valueOf();
            console.log($scope.param.createAt);
            $scope.param.content = editor.txt.html();

            $http({
                method: 'PUT',
                url: '/carrots-admin-ajax/a/u/article/'+id,
                params: $scope.param
            }).then(function (data) {
                if(data.status === 200){
                    $state.go('list.article');
                    bootbox.alert("编辑成功!")
                }else {
                    bootbox.alert(data.message);
                }
            })
        }
    }

    //表单验证禁用按钮

    //取消
    $scope.cancel = function () {
        $state.go('list.article');
    }
});
