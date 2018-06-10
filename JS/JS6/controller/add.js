
angular.module('App')
.controller('addCtrl', function ($scope, $state, FileUploader, $http, $stateParams, myConstantType, myIndustryData) {

    $scope.typeData = myConstantType;
    $scope.industryData = myIndustryData;

    //wangEditor富文本编辑器
    var E = window.wangEditor;
    var editor = new E('#wEditor');
    //上传图片
    editor.customConfig.uploadImgShowBase64 = true;
    editor.create();


    //上传图片
    var uploader = $scope.uploader = new FileUploader();
    uploader.url = '/carrots-admin-ajax/a/u/img/task';
    uploader.queueLimit = 1;
    uploader.queue = [];

    uploader.onSuccessItem = function(data,fileItem) {
        $scope.imageSrc1 = fileItem.data.url;
    };

    //删除图片
    $scope.remove1 = function () {
        $scope.imageSrc1 = undefined;
    };

    $scope.id=$stateParams.id;
    console.log($scope.id);

    $scope.param = {};

    //编辑article
    if($stateParams.id){
        $scope.head = "编辑Article";
        id = $scope.id;

        $http({
            method: 'GET',
            url: '/carrots-admin-ajax/a/article/'+id
        }).then(function (data) {
            if(data.data.code === 0){
                $scope.param = data.data.data.article;
                $scope.imageSrc1 = $scope.param.img;
                editor.txt.html($scope.param.content);
            }else {
                bootbox.alert(data.data.message);
            }
        });

        //立即上线
        $scope.online = function () {
            $scope.param.img = $scope.imageSrc1;
            $scope.param.status = 2;
            $scope.param.createAt = new Date().valueOf();
            $scope.param.content = editor.txt.html();

            $http({
                method: 'PUT',
                url: '/carrots-admin-ajax/a/u/article/'+id,
                params: $scope.param
            }).then(function (data) {
                if(data.data.code === 0){
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

    //新增article
    }else {
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
                if(data.data.code === 0){
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
                if(data.data.code === 0){
                    $state.go('list.article');
                    bootbox.alert("新增成功!");
                }else {
                    bootbox.alert(data.message);
                }
            })
        }
    }

    //取消
    $scope.cancel = function () {
        bootbox.confirm('取消后您的操作将不会保存,确定取消吗?', function (result) {
            if(result){
                $state.go('list.article');
            }else {
                return;
            }
        })
    }
});
