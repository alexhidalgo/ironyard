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

// Circular rosetta stone.

var myName = window.prompt('What do you want to encrypt?');
if(myName.charCodeAt() < 123 && myName.charCodeAt() > 96) {

	var name = '';

	for(var i=0; i<myName.length; i++) {
		var asciiValue = myName.charCodeAt(i);
		if(asciiValue > 109) {
			asciiValue = (asciiValue + 13) -26;
			name+=String.fromCharCode(asciiValue);
		} else {
			asciiValue += 13;
			name+=String.fromCharCode(asciiValue);
		}
	}
	console.log(name);
} else if(myName.charCodeAt() < 91 && myName.charCodeAt() > 64){

	var name = '';

	for(var i=0; i<myName.length; i++) {
		var asciiValue = myName.charCodeAt(i);
		if(asciiValue > 77) {
			asciiValue = (asciiValue + 13) -26;
			name+=String.fromCharCode(asciiValue);
		} else {
			asciiValue += 13;
			name+=String.fromCharCode(asciiValue);
		}
	}
	console.log(name);

} else  {
	window.alert("Please use the alphabet upper or lowercase.");
	throw("Not within Ascii characters of the alphabet.");
}


//3. Create a function that takes a ROT-13 encrypted string and returns the decrypted version of that string.
// var myName = window.prompt('What do you want to encrypt?');

// 	var name = '';

// 	for(var i=0; i<myName.length; i++) {
// 		var asciiValue = myName.charCodeAt(i);
// 		asciiValue -= 13;
// 		name += String.fromCharCode(asciiValue);
// 	}

// 	console.log(name);

//4. Create a function that takes an unencrypted string and an integer (n) and returns the ROT-N version
// of that string.

// Prompts produce strings not numbers

// var myName = window.prompt('What do you want to encrypt?');
// var rotNum = window.prompt('What ROT-N would you like to us? Enter a number.');

// 	var name = '';

// 	for(var i=0; i<myName.length; i++) {
// 		var asciiValue = myName.charCodeAt(i);
// 		asciiValue += parseInt(rotNum);
// 		name += String.fromCharCode(asciiValue);
// 	}

// console.log(rotNum);
// console.log(name);
