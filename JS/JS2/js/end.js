
var v = sessionStorage.getItem('victory');
document.getElementById('victory').innerHTML = v;

function again() {
    sessionStorage.removeItem('dieNum');
    sessionStorage.removeItem('dieList');
    sessionStorage.removeItem('K');
    sessionStorage.removeItem('P');
    window.location.href = "set.html";
}