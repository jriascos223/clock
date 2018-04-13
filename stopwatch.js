var time1 = 0;
var time2 = 0;
var time3 = 0;
var time4 = 0;
var time5 = 0;
var time6 = 0;
var togle = "true";
function start(){
  if (togle === "true") {
    var myVar = setInterval(stopwatch, 1000);
    togle = "false";
    console.log('test');
  }else{
    clearInterval(myVar);
    togle = "true";
    console.log('test2');
  }



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
    display(time1,time2,time3,time4,time5);document.getElementById('stopwatch').innerHTML = time5 + ":" + time4 + time3 +":" + time2 + time1;
  }
  function display(time1,time2,time3,time4,time5){
  document.getElementById('stopwatch').innerHTML = time5 + ":" + time4 + time3 +":" + time2 + time1;
  }
}
