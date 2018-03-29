
var s = document.getElementById("shade");
var r = document.getElementById("circle");
var d = document.getElementById("dialog");

function judge() {
    window.location.href = "kill.html";
}

function kill() {
    window.location.href = "kill.html";
    // var kill = document.getElementById('kill');
    // kill.style.background = "rgb(24, 117, 141)";
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
function enter() {
    s.style.display = "none";
    r.style.display = "none";
}
function cancel() {
    s.style.display = "none";
    r.style.display = "none";
}

function vote() {
    window.location.href = "kill.html";
    sessionStorage.setItem('killer',"发言讨论结束,大家请投票");
}