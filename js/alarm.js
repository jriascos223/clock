var alarms = [];
var timeouts = [];
var hour, minutes, seconds, outputHour,relativeNoon;

window.onload = function start() {
    lightTime(undefined, true);
}
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("submit").addEventListener("click", function (event) {
        var hours = document.getElementById("hours").value;
        var minutes = document.getElementById('minutes').value;
        var relativenoon = document.getElementById("relativenoon").value;
        setAlarm(hours, minutes, relativenoon);
    });
    var check = setTimeout(function checkForAlarms() {
        if (alarms.length == 1) {
            document.getElementById("submit").disabled = true;
        }
        if (document.getElementById("hours").value == "OFF" || document.getElementById('relativenoon').value == "AMPM") {
            document.getElementById("submit").disabled = true;
        }else {
            document.getElementById("submit").disabled = false;
        }
        setTimeout(checkForAlarms);
    }, 10);
    var clear = document.getElementById("stop").addEventListener("click", function() {
        clearInterval(alarms);
        alarms.pop();
        document.getElementById("submit").disabled = false;
        document.getElementById("currentAlarm").innerHTML = "Your current alarm is for: ";
    });
});

function setAlarm(hours, minutes, relativenoon) {
    var displayMinutes = minutes.toString();
    if (displayMinutes.length == 1) {
        displayMinutes = "0" + displayMinutes;
    }
    document.getElementById("currentAlarm").innerHTML += (hours + ":" + displayMinutes + " " + relativenoon);
    console.log(hours, minutes, relativenoon);
    alarms.push(setTimeout(function checkTime() {
        console.log(alarms);
        var hour = new Date().getHours();
        var minute = new Date().getMinutes();
        var second = new Date().getSeconds();
        var outputHour = hour;
        var relativeNoon = "AM";
        if (outputHour > 12) {
            outputHour = outputHour - 12;
            relativeNoon = "PM";
        }
        if (outputHour == 0) {
            outputHour = 12;
        }
        if (outputHour == hours && minute == minutes && relativeNoon == relativenoon) {
            var number = document.getElementById("sound").value;
            handleAudio(number);
            clearInterval(alarms);
        } else {
            setTimeout(checkTime, 10);
        }
    }));
}

function handleAudio(number) {
    console.log(alarms);
    if (number == undefined) {
        return;
    }
    var audio = document.getElementById("audio" + number);
    document.getElementById("stop").addEventListener("click", function() {
        audio.pause();
        audio.currentTime = 0;
        alarms.pop();
        document.getElementById("submit").disabled = false;
        document.getElementById("currentAlarm").innerHTML = "Your current alarm is for: ";
        console.log('audio stopped.');
        handleAudio();
    });
    audio.addEventListener('ended', function(){
        this.currentTime = 0;
        this.play();
    }, false);
    audio.play();
    console.log('audio played.');
}

function lightTime() {
    document.getElementById('message').innerHTML = "The current time in your location is...";
    timeouts.push(setTimeout(function getTime() {
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
          document.getElementById("message").innerHTML = "The current time in your location is...";
        setTimeout(getTime, 10);
  
    }, 10));
  }

