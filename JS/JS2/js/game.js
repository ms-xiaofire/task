
var s = document.getElementById("shade");
var r = document.getElementById("circle");
var d = document.getElementById("dialog");
var e = document.getElementById("enter");
var n = document.getElementById("end");

function judge() {
    window.location.href = "god.html";
}

//设置变量,存放游戏进行到第几天
var dayNum = sessionStorage.setItem('dayNum',JSON.stringify());

function kill() {
    window.location.href = "kill.html";
    // var kill = document.getElementById('kill');
    // kill.style.background = "rgb(24, 117, 141)";
    sessionStorage.setItem('title', "杀手杀人");
    sessionStorage.setItem('killer',"杀手请睁眼,杀手请选择要杀的对象");
}

function ghost() {
    s.style.display = "block";
    r.style.display = "block";
    d.innerHTML = "请亡灵发表遗言";
}
function player() {
    s.style.display = "block";
    r.style.display = "block";
    d.innerHTML = "请玩家依次发言";
}
function finish() {
    s.style.display = "block";
    r.style.display = "block";
    e.style.display = "none";
    n.style.display = "block";
    d.innerHTML = "确定要结束游戏?";
}
function enter() {
    s.style.display = "none";
    r.style.display = "none";
}
function cancel() {
    s.style.display = "none";
    r.style.display = "none";
    e.style.display = "block";
    n.style.display = "none";
}
function end() {
    window.location.href = "home.html";
}
function vote() {
    window.location.href = "kill.html";
    sessionStorage.setItem('title', "玩家投票");
    sessionStorage.setItem('killer',"发言讨论结束,大家请投票");
}