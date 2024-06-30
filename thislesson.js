//this
//problem one of my favorite things to do within script includes
//you can use this keyword to call a method function within a script include
//whenever you call this it is because you are calling a variable or function 
//that is basically pertaining to itself
//you are calling yourself 
//this example is calling for a value key within itself (which is the object)
//this._functionName()

var obj = {
	value: 'sup man',
	showValue: function() {
		gs.info(this.value);
	}
};



obj.showValue();

var outsideFunction = obj.showValue; //this is just storing the method as a new var
outsideFunction();//outputs undefined
//doesnt work because the outside function doesnt know what 'this' means
//cnt call itself


//this exercise
//create a script and define an object named userProfile with properties name and 
//logname

//include a method logname that logs the user's name using this 
//invoke outside as well

var userProfile = {
	name: 'Sarah',
	logName: function() {
		gs.info(this.name);
	}
};

userProfile.logName();
var notgoingtowork = userProfile.logName;

notgoingtowork();