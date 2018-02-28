// var obj = {
//     toString: function () {
//         return 1;
//     }
// };
// var obj = new Date();
// obj.valueOf = function () { return 1 };
// obj.toString = function () { return "hello" };
// var age = obj + 2;
// alert(age);
// if(1>2) {
//     alert("1>2");
// }else {
//     alert("条件不足");
// }
var test = document.getElementById('test');
test.addEventListener('mouseenter',function (event) {
    event.target.style.color = 'purple';
    setTimeout(function () {
        event.target.style.color = '';
    },500);
},false);