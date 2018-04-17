var delay = 1000;
// var x = document.getElementById("input").value;
var time1 = 30;
var time2 = 0;
var time3 = 0;
// console.log(x);


function start() {
  var audio = new Audio('sounds/alarm.mp3');
  var btn = document.getElementById("button");
  btn.disabled = true;
  x = +prompt('Enter time amout');
  document.getElementById('timer').innerHTML = x;
  var myVar = setInterval(timer, 1000);


  function timer() {

    time1 = time1 - 1;
    document.getElementById('timer').innerHTML = x;

    if (x == 0) {
      clearInterval(myVar);
      audio.play();
      var btn = document.getElementById("button");
      btn.disabled = false;
    }
  }

}
