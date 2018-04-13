//获取模态框的DOM
var s = document.getElementById("shade");
var r = document.getElementById("circle");
var d = document.getElementById("dialog");
var e = document.getElementById("enter");
var n = document.getElementById("end");

// //有限状态机
// $(document).ready(function () {
//     var fsm = new StateMachine({
//         into: 'night',
//         transitions: [
//             {name: 'kill', from: 'night', to: 'day'},
//             {name: 'ghost', from: 'day', to: 'say'},
//             {name: 'player', from: 'say', to: 'voter'},
//             {name: 'vote', from: 'voter', to: 'night'}
//         ],
//         methods: {
//             onAfterKill: function (lifecycle) {
//                 console.log('状态:'+ fsm.state);
//                 sessionStorage.setItem('stateDie', fsm.state);
//             },
//             onGhost: function (lifecycle) {
//                 s.style.display = "block";
//                 r.style.display = "block";
//                 d.innerHTML = "请亡灵发表遗言";
//                 sessionStorage.setItem('ghosts', fsm.state);
//                 $("#ghost").css('background-color', '#21a8c8');
//             },
//             onPlayer: function (lifecycle) {
//                 s.style.display = "block";
//                 r.style.display = "block";
//                 d.innerHTML = "请玩家依次发言";
//                 sessionStorage.setItem('say', fsm.state);
//                 $("#player").css('background-color', '#21a8c8');
//             },
//             onAfterVote: function (lifecycle) {
//                 $("#vote").css('background-color', '#21a8c8');
//                 sessionStorage.setItem('stateNight', fsm.state);
//                 sessionStorage.removeItem('stateDie');
//                 sessionStorage.removeItem('ghosts');
//                 sessionStorage.removeItem('say');
//             }
//         }
//     });
//     var Die = sessionStorage.getItem('stateDie');
//     var Ghost = sessionStorage.getItem('ghosts');
//     var Say = sessionStorage.getItem('say');
//     if(Die === "day"){
//         $('#kill').css('background-color', '#21a8c8');
//     }
//     if(Ghost === "say"){
//         $('#ghost').css('background-color', '#21a8c8');
//     }
//     if(Say === "voter"){
//         $('#player').css('background-color', '#21a8c8');
//     }
//     $('#kill').click(function () {
//         if(Die === "day"){
//             alert("请按步骤来!")
//         }else {
//             fsm.kill();
//             window.location.href = "kill.html";
//             sessionStorage.setItem('title', "杀手杀人");
//             sessionStorage.setItem('killer',"杀手请睁眼,杀手请选择要杀的对象");
//             sessionStorage.setItem('isKill','1');
//             disabled = "disabled";
//         }
//     });
//     $('#ghost').click(function () {
//         if(Die !== 'day'){
//             alert("请按步骤来!");
//         }else {
//             fsm.kill();
//             if(Ghost !== 'say'){
//                 fsm.ghost();
//                 disabled = "disabled";
//             }
//         }
//     });
//     $('#player').click(function () {
//         if(Die !== 'day'){
//             alert("请按照步骤来!")
//         }else {
//             if(Say === 'voter'){
//                 alert("请按步骤来!")
//             }else {
//                 fsm.player();
//                 disabled = "disabled";
//             }
//         }
//     });
//     $('#vote').click(function () {
//         sessionStorage.removeItem('isKill');
//         if(Die !== 'day'){
//             alert("请按步骤来!");
//         }else {
//             fsm.vote();
//             window.location.href = "kill.html";
//         }
//     })
// });

//设置变量,存放游戏进行到第几天
// var dayNum = sessionStorage.setItem('dayNum',JSON.stringify());
function rendar() {
    var a = parseInt(sessionStorage.getItem('A'));
    var b = parseInt(sessionStorage.getItem('B'));
    var c = parseInt(sessionStorage.getItem('C'));
    if(a === 1){
        document.getElementById("kill").style.background = "#18758D";
    }
    if(b === 1){
        document.getElementById("ghost").style.background = "#18758D";
    }
    if (c ===1){
        document.getElementById("player").style.background = "#18758D";
    }
}
rendar();


var A = $('#kill').css("background-color");
console.log(A);
var B = $('#ghost').css("background-color");
console.log(B);
var C = $('#player').css("background-color");
console.log(C);

function kill() {
    if(A === "rgb(24, 117, 141)"){
        alert("请按步骤来!");
    }else {
        window.location.href = "kill.html";
        sessionStorage.setItem('title', "杀手杀人");
        sessionStorage.setItem('killer', "杀手请睁眼,杀手请选择要杀的对象");
        sessionStorage.setItem('isKill', '1');
        document.getElementById("kill").style.background = "#18758D";
        sessionStorage.setItem('A', '1');
    }
}

function ghost() {
    if(A === "rgb(24, 117, 141)"){
        if(B === "rgb(41, 189, 224)") {
            s.style.display = "block";
            r.style.display = "block";
            d.innerHTML = "请亡灵发表遗言";
            document.getElementById("ghost").style.background = "#18758D";
            sessionStorage.setItem('B', '1');
        }else alert("请按步骤来!");
    }else alert("请按步骤来!");
}
function player() {
    if(B === "rgb(24, 117, 141)"){
        if(C === "rgb(41, 189, 224)"){
            s.style.display = "block";
            r.style.display = "block";
            d.innerHTML = "请玩家依次发言";
            document.getElementById("player").style.background = "#18758D";
            sessionStorage.setItem('C', '1');
        }else alert("请按步骤来!");
    }else alert("请按步骤来!");
}
function vote() {
    if(C === "rgb(24, 117, 141)"){
        window.location.href = "kill.html";
        sessionStorage.setItem('title', "玩家投票");
        sessionStorage.setItem('killer',"发言讨论结束,大家请投票");
        sessionStorage.removeItem('isKill');
        sessionStorage.removeItem('A');
        sessionStorage.removeItem('B');
        sessionStorage.removeItem('C');
    }else alert("请按步骤来!");
}


//结束游戏
function finish() {
    s.style.display = "block";
    r.style.display = "block";
    e.style.display = "none";
    n.style.display = "block";
    d.innerHTML = "确定要结束游戏?";
}

//法官日志
// function judge() {
//     window.location.href = "god.html";
// }

//模态框
function enter() {
    location.href = "game.html";
}
function cancel() {
    location.href = "game.html";
}
function end() {
    sessionStorage.removeItem('dieNum');
    sessionStorage.removeItem('dieList');
    sessionStorage.removeItem('K');
    sessionStorage.removeItem('P');
    sessionStorage.removeItem('isKill');
    sessionStorage.removeItem('A');
    sessionStorage.removeItem('B');
    sessionStorage.removeItem('C');
    window.location.href = "home.html";
}