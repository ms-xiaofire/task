//返回首页
function back() {
    window.location.href="task2-1.html";
}

//同步输入框和滑动条
$(function s1() {
    $("#slider2").slider({ max: 18, min: 4, step: 1, change: function s1(e, ui) { $('#C_Rejection').val(ui.value.toFixed(1)); }, value: parseInt($('#C_Rejection').val()) || 0/*初始化值，不设置默认为0*/ });
    $("#slider2").closest('td').find('input[type="button"]').click(function s1() {
        var v = $("#slider2").slider('value'), opt = $("#slider2").slider('option');
        v = eval(v + this.value + opt.step);
        if (v < opt.min) v = opt.min; else if (v > opt.max) v = opt.max;
        $("#slider2").slider('value', v);
        $('#C_Rejection').val(v.toFixed(1)); //浮点计算js可能会导致精度出错，需要toFixed转下精度
    });
});

//分析杀手人数和平民人数
function set() {
    var a = document.getElementById("C_Rejection").value;
    var k = document.getElementById("kill");
    var c = document.getElementById("civilian");
    console.log(a);
    if(a>3&&a<19) {
        k.innerHTML = Math.floor(a/4);
        c.innerHTML = a-k.innerHTML;
        var killA =k.innerHTML;
        var Num = [];
    }else alert("请输入正确的玩家数量!");
}


