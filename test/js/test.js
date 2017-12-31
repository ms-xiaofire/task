var currentFile = 'image/财富自由.mp3';
//判断浏览器是否支持audio
if (!window.HTMLAudioElement) {
    alert('您的浏览器不支持audio标签');
} else {
    var myAudio = document.getElementById('myAudio');
//播放/暂停按钮
    $('#playBtn').click(function () {
        var icon = $(this).find('i');
        //播放
        if (myAudio.paused) {
            //如果延迟指定src的话，会在播放前有较长的等待
            if (myAudio.src.length <= 0) {
                myAudio.src = currentFile;
            }
            myAudio.play();
            icon.removeClass('glyphicon-play').addClass('glyphicon-pause');
        } else {
            myAudio.pause();
            icon.addClass('glyphicon-play').removeClass('glyphicon-pause');
        }
    });
//静音按钮
    $('#mutedBtn').click(function () {
        var icon = $(this).find('i');
        icon.toggleClass('glyphicon-volume-down').toggleClass('glyphicon-volume-off');
        myAudio.muted = !myAudio.muted;
    });
//音量按钮
    $('#volume').slider({
        value: myAudio.volume * 100
    }).on('change', function (e) {
        var value = e.value.newValue / 100;
        myAudio.volume = value;
    });
    $('#changeBtn').click(function () {
        //使用在线文件
        myAudio.src = 'http://m5.file.xiami.com/523/78523/1136455538/1774490672_16884267_l.mp3?auth_key=61ade10d6a7508618ab53fe2aaa39b8c-1478919600-0-null';
        myAudio.play();
    });
//监听事件
    myAudio.oncanplay = function () {
        console.info('进入可播放状态,音频总长度:' + myAudio.duration);
    }
    myAudio.onplay = function () {
        console.info('开始播放：' + myAudio.currentTime);
    }
    myAudio.onpause = function () {
        console.info('暂停播放：' + myAudio.currentTime);
    }
    myAudio.onprogress = function () {
        //console.info(myAudio.buffered);
        //console.info('正在播放：' + myAudio.currentTime);
    }
    myAudio.ontimeupdate = function (e) {
        console.info('播放时间发生改变：' + myAudio.currentTime);
    }
}