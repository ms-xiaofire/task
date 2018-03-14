
function check() {
    var k = document.getElementById("king");
    var b = document.getElementById("board");
    var s = document.getElementById("status");
    k.style.display = "none";
    b.style.display = "block";
    s.style.display = "block";
    document.getElementById("check").innerHTML = "隐藏1号身份并传递给2号";
}