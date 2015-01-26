//Slot Machine Game

//Directions for making game

//random number must match for user to be awarded.
//User will be initialized with a prompt asking them to play the game upon document.ready
//Prompt: Yes or no?
// yes = 3 math.randoms and if they match then you get a prompt saying "you won!"
// no = cancel out of game with notification of cancellation

//Start with creating the matching game
//Then use switch statements for yes and no and maybe



// Casino Game upon doc.ready

$(document).ready(function() {

  while (window.confirm("Click 'OK' to play the Slot Machine. \nMatch 1,2,3 or 3,2,1 and you win!")) {

    var firstNum = Math.floor(Math.random() * (4 - 1) + 1);
    var secondNum = Math.floor(Math.random() * (4 - 1) + 1);
    var thirdNum = Math.floor(Math.random() * (4 - 1) + 1);
    console.log("&" + "\n" + "&" + "\n" + "&");
    console.log(firstNum, secondNum, thirdNum);


    if (firstNum === 1 && secondNum === 2 && thirdNum === 3) {
        console.log("You win!");
        window.alert(firstNum + secondNum + thirdNum + "You win!");
    } else if (firstNum === 3 && secondNum === 2 && thirdNum === 1) {
    		console.log("You win!");
        window.alert(firstNum + secondNum + thirdNum + "You win!");
    } else {
        console.log("You lose!");
        window.alert(firstNum + secondNum + thirdNum + "You lose!");
    }
  }
});

