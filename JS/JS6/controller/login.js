//登录页面控制器
angular.module('App')
    .controller('logCtrl', function ($scope, $state, $http) {
        sessionStorage.clear();
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
                        $state.go('list');
                        sessionStorage.setItem('log-in', 1);
                    } else {
                        $scope._test = response.data.message;
                    }
                },
                //登录失败执行的代码
                function (response) {
                    console.log(response);
                }
            )
        };
    });
