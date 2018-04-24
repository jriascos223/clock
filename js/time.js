var timeouts = [];
var currentZone;
var hour, minutes, seconds, outputHour,relativeNoon;
window.onload = function calcTime() {
  displayTime(undefined, true, "default");
  chooseMOTD();
};
//oval code is the entire file pretty much

function displayTime(diff, clear, location) {
  var place = location.replace(/\s/g, "");
  document.getElementById('message').innerHTML = "The current time in your location is...";
  if (clear == true) {
    clearWorldwideIntervals();
  }
  if (location == "default") {
    document.getElementById("world").className = "worldClock";
  }else {
    document.getElementById('world').className = place;
  }
  timeouts.push(setTimeout(function getTime() {
    if (diff == undefined) {

      hour = new Date().getHours();
      minutes = new Date().getMinutes();
      seconds = new Date().getSeconds();
      outputHour = hour;
      var numberOfTimes = 0;
      relativeNoon = "AM";
      while (outputHour > 12) {
        outputHour = outputHour - 12;
        numberOfTimes++;
      }
      while (outputHour == 0) {
        outputHour = 12;

      }
      while (outputHour < 0) {
        outputHour += 12;
        numberOfTimes++;
      }
      
      if (numberOfTimes % 2 == 0) {
        relativeNoon = "AM";
      }else {
        relativeNoon = "PM";
      }
      if (seconds.toString().length == 1) {
        seconds = "0" + seconds.toString();
      }
      if (minutes.toString().length == 1) {
        minutes = "0" + minutes.toString();
      }
      document.getElementById("time").innerHTML = outputHour + ":" + minutes + ":" + seconds + " " + relativeNoon;
      if (location == undefined || location == "default") {
        document.getElementById("message").innerHTML = "The current time in your location is...";
      }else {
        document.getElementById("message").innerHTML = "The current time in " + location + " is...";
      }
      setTimeout(getTime, 10);
    } else {
      hour = new Date().getUTCHours();
      minutes = new Date().getUTCMinutes();
      seconds = new Date().getUTCSeconds();
      outputHour = hour + diff;
      var numberOfTimes = 0;
      relativeNoon = "AM";
      while (outputHour > 12) {
        outputHour = outputHour - 12;
        numberOfTimes++;
      }
      while (outputHour == 0) {
        outputHour = 12;

      }
      while (outputHour < 0) {
        outputHour += 12;
        numberOfTimes++;
      }
      
      if (numberOfTimes % 2 == 0) {
        relativeNoon = "AM";
      }else {
        relativeNoon = "PM";
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

function chooseMOTD() {
  var messages = ["Welcome!", "Keep it up fella!", "What if you were rich? Think about that.", "Stay positive.", "I don't think this is productive.", "Treat yourself to some ice cream.",
  "Take a break!", "You actually took the time to read this.", "Is your work really that important?"];
  var index = Math.floor(Math.random()*((messages.length - 1)-0+1)+0);
  document.getElementById("MOTD").innerHTML = messages[index];
}
