var delay = 1000;
// var x = document.getElementById("input").value;
var x = 30;
// console.log(x);


function start() {
  var audio = new Audio('sounds/alarm.mp3');
  var btn = document.getElementById("button"); btn.disabled = true;
  x = +prompt('Enter time amout');
  document.getElementById('timer').innerHTML = x;
  var myVar = setInterval(timer, 1000);


function timer() {

    x = x-1;
    document.getElementById('timer').innerHTML = x;
    if (x==0) {
      clearInterval(myVar);
      audio.play();
      var btn = document.getElementById("button"); btn.disabled = false;
    }
}

}
