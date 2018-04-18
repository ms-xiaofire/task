
$(document).ready(function () {
    $('#login').click(function (login) {
        var name = document.getElementById('name').value;
        var password = document.getElementById('password').value;
        console.log(name);
        console.log(password);
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('password', password);
    })
});
