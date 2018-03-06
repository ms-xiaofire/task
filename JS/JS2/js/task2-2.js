//返回首页
function back() {
    window.location.href="task2-1.html";
}
//输入框输入人数
function set() {
    var a = document.getElementById("num").value;
    if(a>3&&a<19){
        alert(a);
    }else {
        alert("请输入正确的玩家人数!")
    }
}
//同步输入框和滑动条两个input
var o_1 = document.getElementById("num");
var o_2 = document.getElementById("progress");
o_1.onkeyup = function () {
    o_1.value = o_2.value;
};
// function num() {
//     var b = document.getElementsByName("number")[0].value;
//     document.getElementsByName("number")[1].value = b;
// }
