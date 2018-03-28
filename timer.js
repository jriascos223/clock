var delayInMilliseconds = 1000;

function start() {
  timer();
}


function timer() {
    var x = 31;
    var x = x-1;
    document.getElementById('timer').innerHTML = x + "s";
  if (x !== 0) {
    timer();
  }
}, delayInMilliseconds);
