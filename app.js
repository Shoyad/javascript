window.hello = 'hello';
console.log(this.hello);

var helloWorld = function() {
	console.log(this);
}

helloWorld();

var human = {
	name: 'Alex',
	getName: function() {
		console.log(this);
	}
};

human.getName();

var Mail = function() {
	this.letter = 'This is my letter';
	console.log(this);
}

var mail = new Mail();
var mail2 = new Mail();