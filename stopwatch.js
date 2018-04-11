function start(){

  var time1 = 0;
  var time2 = 0;
  var time3 = 0;
  var time4 = 0;
  var time5 = 0;
  var time6 = 0;
  var myVar = setInterval(stopwatch, 1000);


  function stopwatch(){
    time1 += 1;
    if (time1 >= 10) {
      time1 = 0;
      time2 += 1;
      if (time2 >= 6) {
        time1 = 0;
        time2 = 0;
        time3 += 1;
        if (time3 >= 10) {
          time1 = 0;
          time2 = 0;
          time3 = 0;
          time4 += 1;
          if (time4 >= 6) {
            time1 = 0;
            time2 = 0;
            time3 = 0;
            time4 = 0;
            time5 +=1;
          }
        }
      }
    }
    document.getElementById('stopwatch').innerHTML = time5 + ":" + time4 + time3 +":" + time2 + time1;
  }


}
