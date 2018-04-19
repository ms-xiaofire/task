
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
            // alert("Data: "+data+"\nStatus: "+status);
                var Date = JSON.stringify(data);
                var Status = JSON.stringify(status);
                console.log(Date);
                console.log(Status);
            });
    });
});
