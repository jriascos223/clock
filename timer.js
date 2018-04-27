var delay = 1000;
// var time1 = document.getElementById("input").value;
// var time1 = parseInt(time1);
var time1 = 0;
var time2 = 0;
var time3 = 0;
console.log(time1);

function start() {
	time1 = document.getElementById('timer1').value;
	time2 = document.getElementById('timer2').value;
	time3 = document.getElementById('timer3').value;
	time1 = parseInt(time1);
	time2 = parseInt(time2);
	time3 = parseInt(time3);
	if(time1 === 'NaN'){
		time1 = 0;
	}
	if(time2 === 'NaN'){
		time2 = 0;
	}
	if(time3 === 'NaN'){
		time3 = 0;
	}
	console.log(time1);
	var audio = new Audio('sounds/alarm.mp3');
	var btn = document.getElementById('button');
	btn.disabled = true;
	// time1 = +prompt('Enter time amout');
	// document.getElementById('timer').value = time1;
	var myVar = setInterval(timer, 1000);

	function timer() {
		time1 = time1 - 1;
		if(time1 < 0 && time2 > 0){
			time2 = time2 -1;
			time1 = 59;
		}
		if (time1 < 0 && time2 === 0 && time3 > 0) {
			time1 = 59;
			time2 = 59;
			time3 = time3 -1
		}
		document.getElementById('timer1').value = time1 + " sec";
		document.getElementById('timer2').value = time2 + " min";
		document.getElementById('timer3').value = time3 + " hr";

		if (time1 == 0  && time2 == 0 && time3 == 0) {
			clearInterval(myVar);
			audio.play();
			var btn = document.getElementById('button');
			btn.disabled = false;
		}
	}
}
