
angular.module('demoApp', [])
    .controller('demoCtrl', function ($scope) {
        var uploader = $scope.uploader = new FileUploader();
        uploader.url = '/carrots-admin-ajax/a/u/img/task';
        uploader.queue = [];
    });
