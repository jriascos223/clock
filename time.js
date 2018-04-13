var timeouts = [];
var currentZone;
window.onload = function calcTime() {
  //in order to get location we will make an ajax request
  //hope to soon include the ability to get correct time (not system time) from a remote server
  var xhr = new XMLHttpRequest();
  xhr.open('GET', "https://ipinfo.io/json", true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      document.getElementById('location').innerHTML = "Your location is " + response.city + ", " + response.region + " in the " + response.country + ".";
      document.getElementById('message').innerHTML = "The current time in " + response.city + ", " + response.region + " in the " + response.country + " is...";
    }
  };
  displayTime();
  
};

function displayTime(diff, clear) {
  timeouts.push(setTimeout(function getTime() {
    if (clear == true) {
      //literally searches all timeouts in the file and exterminates them
    //ended up finding this online cause I just couldn't clear the timeouts I had
    let id = window.setTimeout(() => {}, 0);
    console.log(id);
    while (id) {
      window.clearTimeout(id);
      id--;
    }

    id = window.setInterval(() => {}, 0);
    console.log(id);
    while (id) {
      window.clearInterval(id);
      id--;
    }
    }
    if (diff == undefined) {
      var hour = new Date().getHours();
      var minutes = new Date().getMinutes();
      var seconds = new Date().getSeconds();
      var outputHour = hour;
      var relativeNoon = "AM";
      if (outputHour > 12) {
        outputHour = outputHour -  12;
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
      setTimeout(getTime, 10);
    } else {
      var hour = new Date().getUTCHours();
      var minutes = new Date().getUTCMinutes();
      var seconds = new Date().getUTCSeconds();
      var outputHour = hour + diff;
      var relativeNoon = "AM";
      if (outputHour > 12) {
        outputHour = outputHour -  12;
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
      setTimeout(getTime, 10);
    }

  }, 10));
}
