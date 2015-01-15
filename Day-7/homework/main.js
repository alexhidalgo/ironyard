//Slot Machine Game

//Directions for making game

//random number must match for user to be awarded.
//User will be initialized with a prompt asking them to play the game upon document.ready
//Prompt: Yes or no?
// yes = 3 math.randoms and if they match then you get a prompt saying "you won!"
// no = cancel out of game with notification of cancellation

//Start with creating the matching game
//Then use switch statements for yes and no and maybe

//Casino Game Function

// function firstNum(min, max) {
//   return Math.floor(Math.random() * (3 - 1)) + 1;
// }

// function secondNum(min, max) {
//   return Math.floor(Math.random() * (3 - 1)) + 1;
// }

// function thirdNum(min, max) {
//   return Math.floor(Math.random() * (3 - 1)) + 1;
// }

// Casino Game upon doc.ready

$(document).ready(function() {

  while (window.confirm("Click 'OK' to play the Slot Machine.")) {

    var firstNum = Math.floor(Math.random() * (4 - 1) + 1);
    var secondNum = Math.floor(Math.random() * (4 - 1) + 1);
    var thirdNum = Math.floor(Math.random() * (4 - 1) + 1);
    console.log("&" + "\n" + "&" + "\n" + "&");

    console.log(firstNum, secondNum, thirdNum);


    if (firstNum === secondNum && secondNum === thirdNum) {
        console.log("You win!");
        window.alert(firstNum + secondNum + thirdNum + "You win!");
    } else {
        console.log("You lose!");
        window.alert(firstNum + secondNum + thirdNum + "You lose!");
    }
  }
});


// for (i=0; i<5; i++) {


// }

// //Prompt Casino Game upon Doc.ready

// $( document ).ready(function() {
// 	var firstPrompt = window.prompt('Would you like to play this slot machine?');
// 	if (firstPrompt == "yes") {

// 	}	else {
// 		console.log("You keep your money!");
// 	}
// });

