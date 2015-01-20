"use scrict";
// Remember to handle errors and validate functions
// 1. Create a function that takes an array of values and returns one randonly selected value from that array.
// find the length of the arry. select a random position in that array and return it.

// Create a way to get a random integer based on that arrays length
// var myArray = ['test', 'james', 'roger', 'mickey'];

// function getRandomInt(array) {
//   return Math.floor(Math.random() * (array.length - 0)) + 0;
// }

// function randomPosition(arrayName) {
// 	return getRandomInt(arrayName);
// }

//console.log(myArray);
//console.log(randomPosition(myArray));
//console.log(myArray[randomPosition(myArray)]);






//2. Create a function that takes an unencrypted string and returns the ROT-13 version of that string.
//This is slightly different but similar to the example we did in class.
// Take a string
// Break it into an array
// Move each array element +13 positions in ASCII, but +13 would take it out of the alphabet number range. stay within bounds of alaphebet ascii range.
//Join up all the elements back to a string
//Print that string

//Ascii values above 13 in the alphabet range will need to circle back to the start of that range to print an alphabet character
//Ascii 97-122 abcd..xyz
// Any letters above 'm' should start their ascii value back at the letter 'a' so they need to be converted as a string ahead of time

// Failed program below for #2. Fails Rr => E

// var myName = window.prompt('What do you want to encrypt?');
// if(myName.charCodeAt() < 123 && myName.charCodeAt() > 96) {

// 	var name = '';

// 	for(var i=0; i<myName.length; i++) {
// 		var asciiValue = myName.charCodeAt(i);
// 		if(asciiValue > 109 && asciiValue < 123) {
// 			asciiValue = (asciiValue + 13) -26;
// 			name+=String.fromCharCode(asciiValue);
// 		} else {
// 			asciiValue += 13;
// 			name+=String.fromCharCode(asciiValue);
// 		}
// 	}
// 	console.log(name);
// } else if(myName.charCodeAt() < 91 && myName.charCodeAt() > 64){

// 	// var name = '';

// 	for(var i=0; i<myName.length; i++) {
// 		var asciiValue = myName.charCodeAt(i);
// 		if(asciiValue > 77 && asciiValue < 91) {
// 			asciiValue = (asciiValue + 13) -26;
// 			name+=String.fromCharCode(asciiValue);
// 		} else {
// 			asciiValue += 13;
// 			name+=String.fromCharCode(asciiValue);
// 		}
// 	}
// 	console.log(name);

// } else  {
// 	window.alert("Please use the alphabet upper or lowercase.");
// 	throw("Not within Ascii characters of the alphabet.");
// }





// #2 Working program
// var myName = window.prompt('What do you want to encrypt?');
// // if((myName.charCodeAt() < 123 && myName.charCodeAt() > 96) || myName.charCodeAt() < 91 && myName.charCodeAt() > 64) {
// if(/[a-zA-Z]/.test(myName)) {
// 	var name = '';

// 	for(var i=0; i<myName.length; i++) {
// 		var asciiValue = myName.charCodeAt(i);
// 		if(asciiValue > 109 && asciiValue < 123) {
// 			asciiValue = (asciiValue + 13) -26;
// 			name+=String.fromCharCode(asciiValue);
// 		} else if(asciiValue > 96 && asciiValue < 109) {
// 			asciiValue += 13;
// 			name+=String.fromCharCode(asciiValue);
// 		} else if(asciiValue > 77 && asciiValue < 91) {
// 			asciiValue = (asciiValue + 13) -26;
// 			name+=String.fromCharCode(asciiValue);
// 		} else {
// 			asciiValue += 13;
// 			name+=String.fromCharCode(asciiValue);
// 		}
// 	}
// 	console.log(name);
// } else  {
// 	window.alert("Please use the alphabet upper or lowercase.");
// 	throw("Not within Ascii characters of the alphabet.");
// }




//3. Create a function that takes a ROT-13 encrypted string and returns the decrypted version of that string.
// var myName = window.prompt('What do you want to encrypt?');
// // if((myName.charCodeAt() < 123 && myName.charCodeAt() > 96) || myName.charCodeAt() < 91 && myName.charCodeAt() > 64) {
// if(/[a-zA-Z]/.test(myName)) {
// 	var name = '';

// 	for(var i=0; i<myName.length; i++) {
// 		var asciiValue = myName.charCodeAt(i);
// 		if(asciiValue > 109 && asciiValue < 123) {
// 			asciiValue -= 13;
// 			name+=String.fromCharCode(asciiValue);
// 		} else if(asciiValue > 96 && asciiValue > 109) {
// 			asciiValue = (asciiValue - 13) + 26;
// 			name+=String.fromCharCode(asciiValue);
// 		} else if(asciiValue > 77 && asciiValue < 91) {
// 			asciiValue -= 13;
// 			name+=String.fromCharCode(asciiValue);
// 		} else {
// 			asciiValue = (asciiValue - 13) + 26;
// 			name+=String.fromCharCode(asciiValue);
// 		}
// 	}
// 	console.log(name);
// } else  {
// 	window.alert("Please use the alphabet upper or lowercase.");
// 	throw("Not within Ascii characters of the alphabet.");
// }





// 4. Create a function that takes an unencrypted string and an integer (n) and returns the ROT-N version

// var myName = window.prompt('What do you want to encrypt?');
// var rotNum = window.prompt('What ROT-N would you like to us? Enter a number.');
// // if((myName.charCodeAt() < 123 && myName.charCodeAt() > 96) || myName.charCodeAt() < 91 && myName.charCodeAt() > 64) {
// if(/[a-zA-Z]/.test(myName)) {
// 	var name = '';

// 	for(var i=0; i<myName.length; i++) {
// 		var asciiValue = myName.charCodeAt(i);
// 		if(asciiValue >= 97 && asciiValue <= 122) {
// 				asciiValue = (asciiValue - 96);
// 				asciiValue = asciiValue + parseInt(rotNum);

// 				while(asciiValue > 26) {
// 					asciiValue = asciiValue - 26;
// 			}
// 				asciiValue = asciiValue + 96;
// 				name+=String.fromCharCode(asciiValue);
// 		} else if(asciiValue >= 65 && asciiValue <= 90) {
// 				asciiValue = (asciiValue - 64);
// 				asciiValue = asciiValue + parseInt(rotNum);

// 				while(asciiValue > 26) {
// 					asciiValue = asciiValue - 26;
// 				}
// 				asciiValue = asciiValue + 64;
// 				name+=String.fromCharCode(asciiValue);
// 		}
// 	}
// 	console.log(name);
// } else  {
// 	window.alert("Please use the alphabet upper or lowercase.");
// 	throw("Not within Ascii characters of the alphabet.");
// }











//5. Create a javascript function that takes an array of student names and returns an array of randomly selected pairs
// of students (array of arrays).

// var studentList = ["alex", "james", "rick", "gabe", "ryan", "traivs", "aaron", "erica"];
// var pairedList = [];


// function getRandomInt(array) {
//   return Math.floor(Math.random() * (array.length - 0)) + 0;
// }

// function randomPosition() {
// 	return getRandomInt(studentList);
// }

// for(i=0; i < studentList.length; i+2) {
// 		pair = [];
// 		pair += studentList.splice(randomPosition(), 1) + " ";
// 		pair += studentList.splice(randomPosition(), 1);

// 		pairedList.push(pair);
// }

// console.log(pairedList);




// 6. Create a function that takes a string and returns a string with a dash (-) in between each character
// using .split and .join.



var splitJoin = function(string) {
	return string.split('').join('-');
};






// 7. Create a function that takes a string and returns a string with a dash (-) in between each character
// without using .split or .join.

// var myString = "Alex";
// var newString = "";

// var sliceCounter = function(string) {
// 	for(i=0; i<string.length; i++) {
// 		newString += string.slice(i, i+1) + "-";
// 		console.log(newString);
// 	}
// };

// sliceCounter(myString);





// 8. Create a function that takes two string strings and returns a string with a dash (-) in between each
// character without using .split or .join.

// var myString1 = "Alex";
// var myString2 = "James";
// var newString = "";

// var sliceCounter = function(string1, string2) {
// 	for(i=0; i<string1.length; i++) {
// 		newString += string1.slice(i, i+1) + "-";
// 		console.log(newString);
// 	}
// 	for(i=0; i<string2.length; i++) {
// 		newString += string2.slice(i, i+1) + "-";
// 		console.log(newString);
// 	}
// };

// sliceCounter(myString1, myString2);






//9. Use $('selector').val() and $('selector').click() to re-create your number guessing game without using window.prompt.
// Use Bootstrap to build the page.

// $(document).ready(function() {

// 	$( "#numBox" )
//   .inputNum(function() {
//     value = $( this ).val();
//   })
//   .inputNum();
//   console.log(value);

//     $('#playButton').on('click', function() {
//         var $btn = $(this).button('loading');
//         console.log('Play button has been clicked');
//         // business logic...
//         $btn.button('reset');



//         // Random computer generated integer in a self-invoking function so it is always called at the start each time.
//         var randomComputerNumber = function() {
//             return Math.floor(Math.random() * (100 - 1) + 1);
//         }();


//         // User prompt to ask for integer and store it and display in console. Var aNumber is a number not a string.
//         var aNumber = Number(window.prompt("Enter a whole number between 1-100. If you guess right, you win!", ""));
//         var answer = true; //
//         console.log("User Number is " + aNumber);
//         console.log("Computer Number is " + randomComputerNumber);


//         // Validate number is an integer, if not then prompt user to pick again. Need to refine else statement
//         if (Math.floor(aNumber) === aNumber && aNumber > 0) {
//             if (aNumber === randomComputerNumber) {
//                 window.alert("You win!");
//                 anwser = false;
//             } else if (aNumber < randomComputerNumber) {
//                 // window.alert("You're too low.");
//                 aNumber = Number(window.prompt("You're too low.\nEnter a whole number between 1-100. If you guess right, you win!", ""));
//             } else if (aNumber > randomComputerNumber) {
//                 // window.alert("You're too high.");
//                 aNumber = Number(window.prompt("You're too high.\nEnter a whole number between 1-100. If you guess right, you win!", ""));
//             }
//         } else {
//             window.confirm("You must pick a whole number! Try again.");
//         }
//     });
// });



