// 1) Create a function that takes an object and console.logs each property int he object.
var object1 = {
	name: 'alex',
	lastName: 'hidalgo',
	age: 26
};
function listProperties(object) {
	var answer = '';
	for(var key in object){
		answer += key + ": " + object[key] + "\n";
	}
	return answer;
}


//2) Create a function that takes an object and console.logs that object.
//Then delete the rollno property of the object and console.log the object again.

