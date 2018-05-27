angular.module('App')
.constant('myConstantType', [
    {type: '0', name: '首页banner'},
    {type: '1', name: '职位banner'},
    {type: '2', name: '精英banner'},
    {type: '3', name: '行业大图'}
])
.constant('myConstantStatus', [
    {status: '1', name: '草稿'},
    {status: '2', name: '上线'}
]);