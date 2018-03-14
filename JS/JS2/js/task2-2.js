//返回首页
function back() {
    window.location.href = "task2-1.html";
}

//同步输入框和滑动条
$(function s1() {
    $("#slider2").slider({
        max: 18,
        min: 4,
        step: 1,
        change: function s1(e, ui) {
            $('#C_Rejection').val(ui.value.toFixed(0));
        },
        value: parseInt($('#C_Rejection').val()) || 0/*初始化值，不设置默认为0*/
    });
    $("#slider2").closest('td').find('input[type="button"]').click(function s1() {
        var v = $("#slider2").slider('value'), opt = $("#slider2").slider('option');
        v = eval(v + this.value + opt.step);
        if (v < opt.min) v = opt.min; else if (v > opt.max) v = opt.max;
        $("#slider2").slider('value', v);
        console.log(v);
        $('#C_Rejection').val(v.toFixed(0)); //浮点计算js可能会导致精度出错，需要toFixed转下精度
    });
});

//分析杀手人数和平民人数
function set() {
    var a = document.getElementById("C_Rejection").value;
    var k = document.getElementById("kill");
    var c = document.getElementById("civilian");
    var l = "";
    //验证玩家数量
    if (a > 3 && a < 19) {
        k.innerHTML = Math.floor(a / 4);
        c.innerHTML = a - k.innerHTML;
        var killA = Math.floor(a / 4);
        var totalArr = [];
        //遍历杀手数量
        for (var n = 0; n < killA; n++) {
            totalArr[n] = "杀手";
        }
        //遍历平民数量
        for (n = killA; n < a; n++) {
            totalArr[n] = "平民";
        }
        //数组乱序,把平民和杀手的顺序打乱
        totalArr.sort(function () {
            return 0.5 - Math.random()
        });
        //把最终平民和杀手的位置输出到id为per的div里
        for (var i = 0; i < a; i++) {
            var m = i + 1;
            l += m + '号' + totalArr[i] + "</br>";
        }
        document.getElementById("per").innerHTML = l;


    } else
        var s = document.getElementById("shade");
        var r = document.getElementById("circle");
        s.style.display = "block";
        r.style.display = "block";
}
function star() {
    var n = document.getElementById("civilian").innerHTML;
    if (n === "") {
        var s = document.getElementById("shade");
        var r = document.getElementById("circle");
        s.style.display = "block";
        r.style.display = "block";
    } else window.location.href = "task3-1.html";
}
function enter() {
    var s = document.getElementById("shade");
    var r = document.getElementById("circle");
    s.style.display = "none";
    r.style.display = "none";
}
function cancel() {
    var s = document.getElementById("shade");
    var r = document.getElementById("circle");
    s.style.display = "none";
    r.style.display = "none";
}