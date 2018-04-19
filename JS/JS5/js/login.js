
var none = document.getElementById('hint');
function login() {
    none.innerHTML = "";
    var name = document.getElementById('name');
    var password = document.getElementById('password');
    console.log(name.value);
    console.log(password.value);
    var xhr = new XMLHttpRequest();

    xhr.open('Post', '/carrots-admin-ajax/a/login', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
    xhr.send("name="+name.value+"&pwd="+password.value);
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                var josns = JSON.parse(xhr.responseText);
                console.log(josns);
                if(josns.code === 0){
                    console.log("成功!")
                }else {
                    none.innerHTML = "用户名或密码错误!";
                }
            }
        }
    };
    xhr.onerror = function (e) {
        console.error(xhr.statusText);
    };
}
//键盘事件,按enter触发login()事件
document.onkeydown = function (ev) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if(e&&e.keyCode===13){
        login();
    }
};
