var delay = 1000;
// var x = document.getElementById("input").value;
x = 11
console.log(x);

function start() {
  var btn = document.getElementById("button"); btn.disabled = true;
  var myVar = setInterval(timer, 1000);



function timer() {

    x = x-1;
    document.getElementById('input').value = x;
    if (x==0) {
      clearInterval(myVar);
      var audio = new Audio('sounds/alarm.mp3');
      audio.play();
      var btn = document.getElementById("button"); btn.disabled = false;
    }
}

}
