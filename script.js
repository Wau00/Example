const btn = document.getElementById("btn")
var cuantoTeAmo = 1;



var num = document.getElementById("howmuch")
function howMuch() {
    setTimeout(howMuch, 1000);
    setInterval(increase, 1000);
}
function increase() {
    if (cuantoTeAmo < 1000000) {
        cuantoTeAmo++;
        num.innerHTML = cuantoTeAmo;
        console.log("Te amo esto:" + cuantoTeAmo);
    }
}
