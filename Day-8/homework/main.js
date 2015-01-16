// function randomRange(min, max) {
// 	if(typeof min !== 'number') {
// 		throw "min must be a number";
//  }
//  if(typeof max !== 'number') {
// 		throw "max must be a number";
//  }
//  if(min > max) {
// 		throw "max must be greater than min";
//  }

//  var random = Math.random();
//  var newNumber = (random*(max - min)+min);
//  console.log("does the code continue. yes");
// }

// var min = 10;
// var max = 10;

// randomRange(min, max);

// var numRangeRandom = console.log(Math.random*(max - min) + min);




//Example of self-invoking function ie parathenses at the end to invoke.
// var add = function () {
//   console.log('test');
// }();

// USer guesses number. prompt them with 'high' or 'low'


// $(document).ready(function() {

//   while (window.confirm("Click 'OK' to play the Slot Machine. \nMatch 1,2,3 or 3,2,1 and you win!")) {

//     var firstNum = Math.floor(Math.random() * (4 - 1) + 1);
//     var secondNum = Math.floor(Math.random() * (4 - 1) + 1);
//     var thirdNum = Math.floor(Math.random() * (4 - 1) + 1);
//     console.log("&" + "\n" + "&" + "\n" + "&");
//     console.log(firstNum, secondNum, thirdNum);


//     if (firstNum === 1 && secondNum === 2 && thirdNum === 3) {
//         console.log("You win!");
//         window.alert(firstNum + secondNum + thirdNum + "You win!");
//     } else if (firstNum === 3 && secondNum === 2 && thirdNum === 1) {
//     		console.log("You win!");
//         window.alert(firstNum + secondNum + thirdNum + "You win!");
//     } else {
//         console.log("You lose!");
//         window.alert(firstNum + secondNum + thirdNum + "You lose!");
//     }
//   }
// });

/*
Using Javascript and window.prompt, create a number guessing game. The game should randomly
generate a whole number between one and one hundred and ask the player to guess the number.
After each guess, the game should tell the player if they guessed too low, too high, or if they
were correct. If they were not correct then it should prompt them to guess again.
Use functions to organize your code.
Be sure to validate all function arguments.
Use Bootstrap to style the page with instructions on how to play the game.

Planning:

prompt user to enter in a number between 1-100.
that number is then validated to be an integer, and validated to be a number
then compared to a randomly generated integer between 1-100.
If the User number is less than the random number, console.log"you are less than"
If the User number is greater than the random number, consol.log"you are greater than..
else console.log"you win" Next..
The message prompt should be an alert which will allow the user to continue

...after the core of the game is created, we can pretty it up with bootstrap.
Maybe use some bootstrap JS to handle message display. BS has an alert and modal js component.

*/

$(document).ready(function() {

	$('#playButton').on('click', function () {
	    var $btn = $(this).button('loading');
	    console.log('Play button has been clicked');
	    // business logic...
	    $btn.button('reset');



		// Random computer generated integer in a self-invoking function so it is always called at the start each time.
		var randomComputerNumber = function() {
			return Math.floor(Math.random() * (100 - 1)+1);
			}();


		// User prompt to ask for integer and store it and display in console. Var aNumber is a number not a string.
		var aNumber = Number(window.prompt("Enter a whole number between 1-100. If you guess right, you win!", ""));
		var answer = true;  //
		console.log("User Number is " + aNumber);
		console.log("Computer Number is " + randomComputerNumber);


			// Validate number is an integer, if not then prompt user to pick again. Need to refine else statement
			if(Math.floor(aNumber) === aNumber && aNumber > 0){
				if(aNumber === randomComputerNumber) {
					window.alert("You win!");
					anwser = false;
				} else if(aNumber < randomComputerNumber) {
					// window.alert("You're too low.");
					aNumber = Number(window.prompt("You're too low.\nEnter a whole number between 1-100. If you guess right, you win!", ""));
				} else if(aNumber > randomComputerNumber) {
					// window.alert("You're too high.");
					aNumber = Number(window.prompt("You're too high.\nEnter a whole number between 1-100. If you guess right, you win!", ""));
				}
			} else {
				window.confirm("You must pick a whole number! Try again.");
			}


		// Validate number is an integer, if not then prompt user to pick again. Need to refine else statement
		// if(Math.floor(aNumber) === aNumber){
		// 	if(aNumber === randomComputerNumber) {
		// 		window.alert("You win!");
		// 	} else if(aNumber < randomComputerNumber) {
		// 		window.alert("You're too low.");
		// 	} else if(aNumber > randomComputerNumber) {
		// 		window.alert("You're too high.");
		// 	}
		// } else {
		// 	window.confirm("You must pick a whole number! Try again.");
		// }


	});
});
