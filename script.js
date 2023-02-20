const btn = document.getElementById("btn")
var cuantoTeAmo = 1;


setInterval(myTimer, 1000);

function myTimer() {
    const d = new Date();
    document.getElementById("howmuch").innerHTML = d.valueOf();
}
