//登录页面控制器
angular.module('App')
    .controller('logCtrl', function ($scope, $state, $http) {
        console.log("登录页");

        $scope.param = {};
        $scope.myLogin = function () {
            //请求登录
            $http({
                method: 'POST',
                url: '/carrots-admin-ajax/a/login',
                params: $scope.param
                // 登录成功后执行的代码
            }).then(function successCallback(response) {
                    if (response.data.code === 0) {
                        $state.go('list')
                    } else {
                        $scope._test = response.data.message;
                        // $('#hint').text(response.data.message);
                    }
                },
                //登录失败执行的代码
                function (response) {
                    console.log(response);
                }
            )
        };

        // $scope.art = function () {
        //     //请求article列表信息
        //     $http({
        //         method: 'GET',
        //         url: '/carrots-admin-ajax/a/article/search'
        //         //请求成功执行的代码
        //     }).then(function successCallback(response) {
        //         if(response.data.code===0){
        //             console.log(response);
        //         }
        //         // 请求失败执行的代码
        //     },function errorCallback(response) {
        //         console.log(response);
        //     });
        // }
    });
