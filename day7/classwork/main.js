var myName = window.prompt('What do you want to encrypt?');

var name = '';

for(var i=0; i<myName.length; i++) {
	var asciiValue = myName.charCodeAt(i);
	asciiValue += 13;
	name += String.fromCharCode(asciiValue);
}

console.log(name);
