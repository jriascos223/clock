var delay = 1000;
var x = 11;

function start() {
  var btn = document.getElementById("button"); btn.disabled = true;
  var myVar = setInterval(timer, 1000);



function timer() {

    x = x-1;
    document.getElementById('timer').innerHTML = x + "s";
    if (x==0) {
      clearInterval(myVar);
      var btn = document.getElementById("button"); btn.disabled = false;
    }
}

}
