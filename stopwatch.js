var time1 = 0;
var time2 = 0;
var time3 = 0;
var time4 = 0;
var time5 = 0;
var time6 = 0;
var togle = "true";
var button = document.getElementById('button');
function start(){
  var stopRun = setInterval(stopwatch, 1000);
  if (togle === "true") {
    togle = "false";
    document.getElementById('button').innerHTML = 'Stop'
    console.log('test');
  }else{
    let id = window.setTimeout(() => { }, 0);
    while (id) {
      window.clearTimeout(id);
      id--;
    }

    id = window.setInterval(() => { }, 0);
    while (id) {
      window.clearInterval(id);
      id--;
    }
    togle = "true";
    document.getElementById('button').innerHTML = 'Start'
    console.log('test2');
  }



  function stopwatch(){

    time1 += 1;
    clock();
    display(time1,time2,time3,time4,time5);


    function clock(){
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
    }
  }


  function display(time1,time2,time3,time4,time5){
  document.getElementById('time').innerHTML = time5 + ":" + time4 + time3 +":" + time2 + time1;
  }





}
