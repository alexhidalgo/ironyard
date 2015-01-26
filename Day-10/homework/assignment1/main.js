// 1) Create a function that takes an object and console.logs each property int he object.
// var object1 = {
// 	name: 'alex',
// 	lastName: 'hidalgo',
// 	age: 26
// };
// function listProperties(object) {
// 	var answer = '';
// 	for(var key in object){
// 		answer += key + ": " + object[key] + "\n";
// 	}
// 	return answer;
// }


//2) Create a function that takes an object and console.logs that object.
//Then delete the rollno property of the object and console.log the object again.
// var person = {
// 	firstName: "Bob",
// 	lastName: "Smith",
// 	age: 32,
// 	rollno: 12
// };

// function listProperties(object) {
// 	var answer = '';
// 	for(var key in person) {
// 		answer += key + ": " + person[key] + "\n";
// 	}
// 	delete person.rollno;
// 	return person;
// }


//3) Create a function that takes an object and returns the number of properties on that object
//that start with the letter "a" or "A"

// var object1 = {
// 	firstName: 'alex',
// 	lastName: 'dave',
// 	address: 'amesbury',
// 	city: 'alexander'
// };

// var numberlog = 0;

// function searchString(object) {
// 	for(var key in object) {
// 		// console.log(object[key][0]);
// 		// console.log(object[key].charAt(0));
// 		if(object[key].charAt(0) == 'a') {
// 			numberlog = numberlog + 1;
// 		}
// 	}
// 	return numberlog;
// }


//4) Create a function that takes a cylinder object and returns the volume of that cylinder.
//The cylinder object will have radius and height properties.

// function cylinderVolume(radius, height) {
// 	return Math.PI * (radius * radius) * height;
// }


//5) Create a function that takes a firstName, lastName and age and returns an object with firstName,
//lastName and age properties as well as a friends property that contains a list of friend names.
//Add at least 3 friends to the friends list.

// var myInfo = {
// 	firstName: 'alex',
// 	lastName: 'hidalgo',
// 	age: 26
// };

// var friendsList = ['alex', 'dave', 'jim'];

// function makeFriends(fN, lN, a) {
// 	var myInfo = {
// 		firstName: fN,
// 		lastName: lN,
// 		age: a
// 	};
// 	myInfo.friends = friendsList;
// 	return myInfo;
// }


//6) Create a function that takes the result of the last problem and a friend name and adds
//that friend to the friends property of the object.

// var myInfo = {
// 	firstName: 'alex',
// 	lastName: 'hidalgo',
// 	age: 26
// };

// var friendsList = ['alex', 'dave', 'jim'];

// function makeFriends(fN, lN, a) {
// 	 	myInfo = {
// 		firstName: fN,
// 		lastName: lN,
// 		age: a
// 	};
// 	myInfo.friends = friendsList;
// 	return myInfo;
// }

// //Must run makeFriends function to use the addFriend function
// function addFriend(friendName) {
// 	myInfo.friends.push(friendName);
// 	return myInfo.friends;
// }
