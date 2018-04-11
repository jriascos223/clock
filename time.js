window.onload = function() {
  var getTimeTimeout = setTimeout(function getTime() {
    var hour = new Date().getUTCHours();
    var minutes = new Date().getUTCMinutes();
    var seconds = new Date().getUTCSeconds();
    var easternTime = hour - 4;
    document.getElementById("timeHere").innerHTML = easternTime + ":" + minutes + ":" + seconds;
    getTime = setTimeout(getTime, 10);
  }, 10);
};
