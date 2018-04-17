var delay = 1000;
// var time1 = document.getElementById("input").value;
var time1 = parseInt(time1);
// var time1 = 30;
var time2 = 0;
var time3 = 0;
console.log(time1);


function start() {
 time1 = document.getElementById("timer").value;
   time1 = parseInt(time1);
  console.log(time1);
  var audio = new Audio('sounds/alarm.mp3');
  var btn = document.getElementById("button");
  btn.disabled = true;
  // time1 = +prompt('Enter time amout');
  document.getElementById('timer').value = time1;
  var myVar = setInterval(timer, 1000);


  function timer() {

    time1 = time1 - 1;
    document.getElementById('timer').value = time1;

    if (time1 == 0) {
      clearInterval(myVar);
      audio.play();
      var btn = document.getElementById("button");
      btn.disabled = false;
    }
  }

}
