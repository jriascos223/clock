var timeouts = [];
var currentZone;
window.onload = function calcTime() {
  displayTime();
  chooseMOTD();
};
//oval code is the entire file pretty much

function displayTime(diff, clear, location) {
  document.getElementById('message').innerHTML = "The current time in your location is...";
  if (clear == true) {
    clearWorldwideIntervals();
  }
  timeouts.push(setTimeout(function getTime() {
    if (diff == undefined) {

      var hour = new Date().getHours();
      var minutes = new Date().getMinutes();
      var seconds = new Date().getSeconds();
      var outputHour = hour;
      var relativeNoon = "AM";
      if (outputHour > 12) {
        outputHour = outputHour - 12;
        relativeNoon = "PM";
      }
      if (outputHour == 0) {
        outputHour = 12;

      }
      if (seconds.toString().length == 1) {
        seconds = "0" + seconds.toString();
      }
      if (minutes.toString().length == 1) {
        minutes = "0" + minutes.toString();
      }
      document.getElementById("time").innerHTML = outputHour + ":" + minutes + ":" + seconds + " " + relativeNoon;
      if (location == undefined) {
        document.getElementById("message").innerHTML = "The current time in your location is...";
      }else {
        document.getElementById("message").innerHTML = "The current time in " + location + " is...";
      }
      setTimeout(getTime, 10);
    } else {
      var hour = new Date().getUTCHours();
      var minutes = new Date().getUTCMinutes();
      var seconds = new Date().getUTCSeconds();
      var outputHour = hour + diff;
      var relativeNoon = "AM";
      if (outputHour > 12) {
        outputHour = outputHour - 12;
        relativeNoon = "PM";
      }
      if (outputHour < 0) {
        outputHour += 12;
        relativeNoon = "PM";
      }
      if (outputHour == 0) {
        outputHour = 12;
      }
      if (seconds.toString().length == 1) {
        seconds = "0" + seconds.toString();
      }
      if (minutes.toString().length == 1) {
        minutes = "0" + minutes.toString();
      }

      document.getElementById("time").innerHTML = outputHour + ":" + minutes + ":" + seconds + " " + relativeNoon;
      if (location == undefined) {
        document.getElementById("message").innerHTML = "The current time in your location is...";
      }else {
        document.getElementById("message").innerHTML = "The current time in " + location + " is...";
      }
      setTimeout(getTime, 10);
    }

  }, 10));
}

function clearWorldwideIntervals() {
  //literally searches all timeouts in the file and exterminates them
    //ended up finding this online cause I just couldn't clear the timeouts I had
    let id = window.setTimeout(() => { }, 0);
    console.log(id);
    while (id) {
      window.clearTimeout(id);
      id--;
    }

    id = window.setInterval(() => { }, 0);
    console.log(id);
    while (id) {
      window.clearInterval(id);
      id--;
    }
}