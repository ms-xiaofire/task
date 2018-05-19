
angular.module('App')
.controller('addCtrl', function ($scope, $state) {

    //取消
    $scope.cancel = function () {
        $state.go('list.article');
    }
});