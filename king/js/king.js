$(document).ready(function () {
    $('.carousel').carousel({
        interval: 3000
    });
    $('#king').click(function () {
        window.location.reload('king.html')
    })
});