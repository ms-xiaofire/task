//后台页面侧边栏控制器
angular.module('App')
    .controller('listCtrl', function ($scope, $http, $state) {
        $(function(){
            // nav收缩展开
            $('.nav-item>a').on('click',function(){
                if (!$('.nav').hasClass('nav-mini')) {
                    if ($(this).next().css('display') == "none") {
                        //展开未展开
                        $('.nav-item').children('ul').slideUp(300);
                        $(this).next('ul').slideDown(300);
                        $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
                    }else{
                        //收缩已展开
                        $(this).next('ul').slideUp(300);
                        $('.nav-item.nav-show').removeClass('nav-show');
                    }
                    //阻止冒泡事件
                    e.stopPropagation();
                }
            });
            //nav-mini切换
            $('#mini').on('click',function(){
                if (!$('.nav').hasClass('nav-mini')) {
                    $('.nav-item.nav-show').removeClass('nav-show');
                    $('.nav-item').children('ul').removeAttr('style');
                    $('.nav').addClass('nav-mini');
                }else{
                    $('.nav').removeClass('nav-mini');
                }
                //阻止冒泡事件
                e.stopPropagation();
            });
        });
        
        //退出
        $scope.off = function () {
            bootbox.confirm("确定要退出登录吗?", function (result) {
                if(result){
                    $http({
                        method: 'post',
                        url: '/carrots-admin-ajax/a/logout'
                    }).then(function (response) {
                        if(response.data.code === 0){
                            $state.go('login');
                        }
                    },function (response) {
                        console.log(response);
                    })
                }else {
                    return
                }
            })
        }
    });