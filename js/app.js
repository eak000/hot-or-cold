
  var secretNumber;
  var userGuess = 0;
  var counter = 0;
  var winner = false;

$(document).ready(function(){

  
  /*-- submit form function --*/
  
  $("#form").submit(function() {
    event.preventDefault();
    guessClick();
    
  
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
    var guessClick = function(){

      userGuess = $("#userGuess").val();
      var newGuess = $("<li></li>").text(userGuess);
      if (userGuess % 1 !== 0 || userGuess <= 0 || userGuess > 100) {
      $("#feedback").text("Please enter a number between 1 and 100!")
      } 
      //if they guess after they win
      else if (winner == true) {
          $("#feedback").text("Click NEW GAME to play again!");
      }
      else {
        feedback(userGuess);
        counter++;
        $("#guessList").append(newGuess);
        $("#count").text(counter);
      }
      //remove guess from field
      $("#userGuess").val("")

      if (winner == false) {
      $("#userGuess").attr("placeholder", "Try again!")
      } else {
        $("#userGuess").attr("placeholder", "WINNER!");
      };
    }; //Guess button function end

}); //ready function end

   /*---Generate a secret number---*/
    var randomNumber = function() {
      secretNumber = 1 + Math.floor(Math.random()*100);
    }


    /*--- New game function ---*/
    var newGame = function() {
      winner = false;
      console.log(winner);
      //new secret number
      randomNumber();
      //reset counter
      counter = 0;
      //reset guess count
      $("#count").text(counter);
      //reset text box text
      $("#feedback").text("Make your guess!");
      //reset guess value
      // $("#userGuess").val();
      $("#userGuess").val("");
      //reset placeholder text
      $("#userGuess").attr("placeholder", "Enter your Guess!");
      //remove guessed list
      $("#guessList li").remove();
      console.log("secretNumber: "+ secretNumber);
     }; // newGame function end

     /*-- user feedback funtion --*/
     var text;
     var feedback = function() {

        userGuess = $("#userGuess").val();
        // alert(userGuess + secretNumber);

        if ((userGuess > (secretNumber - 5)) && (userGuess < (secretNumber + 5))) {
            text = "smokin' hot";
            if (userGuess == secretNumber){
              text = "You got it!";
              winner = true;
            };
          } 
        else if ((userGuess > (secretNumber - 15)) && (userGuess < (secretNumber + 15))){
            text = "warm";
          }
        else if ((userGuess > (secretNumber - 50)) && (userGuess < (secretNumber + 50))){
          text = "cold";
          }
        else if ((userGuess > (secretNumber - 75)) && (userGuess < (secretNumber + 75))){
          text = "ice cold, baby!";
          }
  
        $("#feedback").text(text);
     }; // feedback function end


