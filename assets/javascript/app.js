//variables
//$(document).ready(function(){

var intervalId;

var time = 30;


//displays
$(".timer").html("30");


//functions

function start() {
	intervalId = setInterval(count, 1000);
	
	}
	

function count() {

		time--
	var converted = timeConverter(time);
	$(".timer").html(converted);

 }

 function timeConverter(t) {

   var minutes = Math.floor(t / 60);
   var seconds = t - (minutes * 60);


   if (seconds < 10) {
   	     seconds = "0" + seconds;
  };

 if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

   return seconds;
};


function quiz() {
	if(time == "00") {
		$(".timer").html("Game Over");
		clearIntervalId(intervalId);

	}
};

function end() {
	if (time == "00") {
		handleClick();
	};
}


function handleClick()
  {         
 var amountIncorrect = 0;
var amountCorrect = 0;    
var unchecked = 0;      
for(var i = 1; i <= 8; i++) {
	
  var radios = document.getElementsByName('questi'+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value == "1" && radio.checked) {
      amountCorrect++;
    }
    if(radio.value =="0" && radio.checked) {
    	amountIncorrect++;
    }
    if(radio.unchecked) {
    	unchecked++;
    }
  }
 }                   
    $("#final").append("Correct" + amountCorrect + " Incorrect: " + amountIncorrect + "unchecked: " + unchecked);
  }

$(document).ready(function() {
	$('#submit').click(handleClick) 
	alert("Correct" + amountCorrect + " Incorrect: " + amountIncorrect + "unchecked: " + unchecked);
		
	});







window.onload = function() {




start();
//quiz();
//done();


	

};






//console.log(timer);



//};





