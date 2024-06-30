//hoisting

//default behavior of moving declarations to top of scope function before
//code execution

//basically you can call a function before it is written

hoistedFunction();

function hoistedFunction() {
	gs.info('I am hoisted!');
}

// doesnt work with variables in the same way.

//declaration vs expression

//delcaring normal way
//expression is this
var test = function() {

};
//hoisting wont work if a function is assigned to a variable