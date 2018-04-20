
$(document).ready(function () {
    $('#login').click(function () {
        var n = $('#name').val();
        var p = $('#password').val();
        console.log(n);
        console.log(p);
        $.post('/carrots-admin-ajax/a/login', {
            name: n,
            pwd: p
        },
            function (data, status) {
                console.log(status);
                var j = JSON.parse(data);
                console.log(j.message);
                if(j.code === 0){
                    window.location.href = "test.html";
                }else {
                    $('#hint').html(j.message);
                }
            });
    });
});
