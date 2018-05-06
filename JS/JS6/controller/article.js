
/*//article控制器
angular.module('App')
.controller('artCtrl', ['$scope', '$http', function ($scope, $http) {
    //请求article列表信息
    $http({
        method: 'GET',
        url: '/carrots-admin-ajax/a/article/search'
    //请求成功执行的代码
    }).then(function successCallback(response) {
        if(response.data.code===0){
            console.log(response);
        }
    // 请求失败执行的代码
    },function errorCallback(response) {
        console.log(response);
    });
}]);*/

