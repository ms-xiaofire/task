(function(){
    var range = document.getElementById("range"),
        volume = document.forms[0]["volume"];//第一次使用这种方式获取document.forms[index][formName];
    //设置初值
    cachedRangeValue = localStorage.rangeValue ? localStorage.rangeValue : 5;
    range.value = volume.value =  cachedRangeValue;
    //判断浏览器是否支持range滑动条
    if(range.type == "text"){
        document.forms[0].innerHTML = "抱歉，您的浏览器不支持range滑动条，请使用高版本浏览器";
    }
    //默认"false"，事件句柄在冒泡阶段支持；若为"true"，则事件在句柄捕获阶段执行
    range.addEventListener("mouseup",function(){
        localStorage ? (localStorage.rangeValue = range.value) : (console.log("不支持本地存储"));
    },"false");
    if(range.addEventListener){
        range.addEventListener("mouseup",function(){
            localStorage ? (localStorage.rangeValue = range.value) : (console.log("不支持本地存储"));
        },"false");
        range.addEventListener("change",function(){
            volume.value = range.value;
        });
    }else{
        range.attachEvent("onmouseup",function(){
            localStorage ? (localStorage.rangeValue = range.value) : (console.log("不支持本地存储"));
        });
        range.attachEvent("change",function(){
            volume.value = range.value;
        })
    }
})();