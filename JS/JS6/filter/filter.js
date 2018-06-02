angular.module('App')
.filter('changeType', function () {
    return function (type) {
        if(type===0){
            return "找首位banner";
        }
        if(type===1){
            return "找精英banner";
        }
        if(type===2){
            return "找职位banner";
        }
        if(type===3){
            return "行业大图";
        }
    }
})
.filter('changeStatus', function () {
    return function (status) {
        if(status === 1){
            return "草稿";
        }
        if(status === 2){
            return "上线";
        }
    }
})
.filter('changeAfk', function () {
    return function (status) {
        if(status === 1){
            return "上线";
        }
        if(status === 2){
            return "下线";
        }
    }
});