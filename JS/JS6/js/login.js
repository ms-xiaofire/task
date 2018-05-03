//jquery ajax的post请求
// $(document).ready(function () {
//     $('#login').click(function () {
//         var name = $('#name').val();
//         var password = $('#password').val();
//         console.log(name);
//         console.log(password);
//         $.post('/carrots-admin-ajax/a/login', {
//                 name: name,
//                 pwd: password
//             },
//             function (data, status) {
//                 console.log(status);
//                 var jsons = JSON.parse(data);
//                 console.log(jsons.message);
//                 if(jsons.code === 0){
//                     location.href = "#/list";
//                 }else {
//                     $('#hint').html(jsons.message);
//                 }
//             });
//     });
// });


//angularJS $http的post请求
/*
angular.module('App', [])
.controller('logCtrl', function ($scope, state, $http) {
    $('#login').click(function () {
        $scope.user={};
        $scope.submit = function () {
            $http({
                method: 'POST',
                url: '/carrots-admin-ajax/a/login'
            }).then(function (response) {
                    if (response.data.code === 0) {
                        $state.go('list')
                    } else {
                        $scope.message = response.data.message;
                    }
                }, function (response) {
                    console.log(response);
                }
            )
        }
    })
});
*/
