//获取模态框的DOM
var s = document.getElementById("shade");
var r = document.getElementById("circle");
var d = document.getElementById("dialog");
var e = document.getElementById("enter");
var n = document.getElementById("end");

//有限状态机
$(document).ready(function () {
    var fsm = new StateMachine({
        into: 'night',
        transitions: [
            {name: 'kill', from: 'night', to: 'day'},
            {name: 'ghost', from: 'day', to: 'say'},
            {name: 'player', from: 'say', to: 'voter'},
            {name: 'vote', from: 'voter', to: 'night'}
        ],
        methods: {
            onAfterKill: function (lifecycle) {
                // console.log('状态:'+ fsm.state);
                sessionStorage.setItem('stateDie', fsm.state);
            },
            onGhost: function (lifecycle) {
                s.style.display = "block";
                r.style.display = "block";
                d.innerHTML = "请亡灵发表遗言";
                sessionStorage.setItem('ghosts', fsm.state);
                $("#ghost").css('background-color', '#21a8c8');
            },
            onPlayer: function (lifecycle) {
                s.style.display = "block";
                r.style.display = "block";
                d.innerHTML = "请玩家依次发言";
                sessionStorage.setItem('say', fsm.state);
                $("#player").css('background-color', '#21a8c8');
            },
            onAfterVote: function (lifecycle) {
                $("#vote").css('background-color', '#21a8c8');
                sessionStorage.setItem('stateNight', fsm.state);
                sessionStorage.removeItem('stateDie');
                sessionStorage.removeItem('ghosts');
                sessionStorage.removeItem('say');
            }
        }
    });
    var Die = sessionStorage.getItem('stateDie');
    var Ghost = sessionStorage.getItem('ghosts');
    var Say = sessionStorage.getItem('say');
    if(Die === "day"){
        $('#kill').css('background-color', '#21a8c8');
    }
    if(Ghost === "say"){
        $('#ghost').css('background-color', '#21a8c8');
    }
    if(Say === "voter"){
        $('#player').css('background-color', '#21a8c8');
    }
    $('#kill').click(function () {
        if(Die === "day"){
            alert("请按步骤来!")
        }else {
            window.location.href = "kill.html";
            fsm.kill();
            sessionStorage.setItem('title', "杀手杀人");
            sessionStorage.setItem('killer',"杀手请睁眼,杀手请选择要杀的对象");
            sessionStorage.setItem('isKill','1');
            disabled = "disabled";
        }
    });
    $('#ghost').click(function () {
        if(Die !== 'day'){
            alert("请按步骤来!");
        }else {
            fsm.kill();
            if(Ghost !== 'say'){
                fsm.ghost();
                disabled = "disabled";
            }
        }
    });
    $('#player').click(function () {
        if(Die !== 'day'){
            alert("请按照步骤来!")
        }else {
            if(Say === 'voter'){
                alert("请按步骤来!")
            }else {
                fsm.player();
                disabled = "disabled";
            }
        }
    });
    $('#vote').click(function () {
        sessionStorage.removeItem('isKill');
        if(Die !== 'day'){
            alert("请按步骤来!");
        }else {
            fsm.vote();
            window.location.href = "kill.html";
        }
    })
});

//设置变量,存放游戏进行到第几天
var dayNum = sessionStorage.setItem('dayNum',JSON.stringify());

// function kill() {
//     window.location.href = "kill.html";
//     // var kill = document.getElementById('kill');
//     // kill.style.background = "rgb(24, 117, 141)";
//     sessionStorage.setItem('title', "杀手杀人");
//     sessionStorage.setItem('killer',"杀手请睁眼,杀手请选择要杀的对象");
//     sessionStorage.setItem('isKill','1');
// }

// function ghost() {
//     s.style.display = "block";
//     r.style.display = "block";
//     d.innerHTML = "请亡灵发表遗言";
// }
// function player() {
//     s.style.display = "block";
//     r.style.display = "block";
//     d.innerHTML = "请玩家依次发言";
// }
// function vote() {
//     window.location.href = "kill.html";
//     sessionStorage.setItem('title', "玩家投票");
//     sessionStorage.setItem('killer',"发言讨论结束,大家请投票");
//     sessionStorage.setItem('isKill','0');
// }

//结束游戏
function finish() {
    s.style.display = "block";
    r.style.display = "block";
    e.style.display = "none";
    n.style.display = "block";
    d.innerHTML = "确定要结束游戏?";
}

//法官日志
function judge() {
    window.location.href = "god.html";
}

//模态框
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
    sessionStorage.removeItem('dieNum');
    sessionStorage.removeItem('dieList');
    sessionStorage.removeItem('K');
    sessionStorage.removeItem('P');
    window.location.href = "home.html";
}