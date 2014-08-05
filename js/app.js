
  var secretNumber;
  var userGuess = 0;
  var counter = 0;

$(document).ready(function(){

  
  $("#form").on("submit", function (e) {
    feedback();
    e.preventDefault();
    return false;
  });

	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    /*-- start new game --*/
    if (secretNumber === undefined) {
      newGame();
    }
    $(".new").click(function() {
      newGame();

    });

    /*-- Guess button function --*/
    $("#guessButton").click(function() {
      if (userGuess % 1 !== 0 || userGuess <= 0 || userGuess > 100) {
      $("#feedback").text("Please enter a number between 1 and 100!");
      feedback();
      };
    }); //Guess button function end

}); //ready function end

   /*---Generate a secret number---*/
    var randomNumber = function() {
      secretNumber = Math.floor(Math.random()*101);
    }


    /*--- New game function ---*/
    var newGame = function() {
      //new secret number
      randomNumber();
      //reset counter
      counter = 0;
      //reset guess count
      $("#count").text(counter);
      //reset text box text
      $("#feedback").text("Make your guess!");
      $("#userGuess").val("");
      $("#userGuess").attr("placeholder", "Enter your Guess!");
      console.log("secretNumber: "+ secretNumber);
     }; // newGame function end

     /*-- user feedback funtion --*/
     var text;
     var feedback = function() {

        userGuess = $("#userGuess").val();
        // alert(userGuess);

        if ((userGuess > (secretNumber - 10)) && (userGuess < (secretNumber +10))) {
            text = "smokin' hot";
          } 
        else if ((userGuess > (secretNumber - 25)) && (userGuess < (secretNumber + 25))){
            text = "warm";
          }
        else if ((userGuess > (secretNumber - 50)) && (userGuess < (secretNumber + 50))){
          text = "cold";
          }
        else if ((userGuess > (secretNumber - 75)) && (userGuess < (secretNumber + 75))){
          text = "ice cold, baby!";
          }
        else if (userGuess === secretNumber){
          text = "You got it!";
        };
        $("feedback").text(text);
     }; // feedback function end


