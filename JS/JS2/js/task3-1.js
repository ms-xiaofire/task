
var k = sessionStorage.getItem('killNum');
var p = sessionStorage.getItem('peopleNum');
console.log(k);
console.log(p);

s = sessionStorage.totalArr;
totalArr = JSON.parse(s);
console.log(totalArr);
console.log(totalArr.length);


function check() {
    var king = document.getElementById("king");
    var board = document.getElementById("board");
    var status = document.getElementById("status");
    king.style.display = "none";
    board.style.display = "block";
    status.style.display = "block";
    document.getElementById("check").innerHTML = "隐藏1号身份并传递给2号";
}