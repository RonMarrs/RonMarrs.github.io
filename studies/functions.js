// FUNCTIONS:
/* Purpose
  0: Functions – allows the coder to contain a block of code, and allows for repeatable 
	execution of that code. The function accepts input, processes the input and 
	returns a new data value. 
*/

/* Use
  0: IOCE is used to determine the outline of our function block.
	I. Input: What datatypes are being passed into this function?
	O. Output: What should this function return?
	C. Constraints: Are there any specifics in the instructions that involve 
		how I build this function?
	E. Edge Case: What conditions do I have to meet to make sure I am 
		offering the proper output?

//I: animals array
//O: index value of the input array element
//C: use math.floor and math.random, value must be random
//E: none

  1: Functions must be Declared/Defined. 
	A. This includes naming your function (this should be relative to the 
		action being taken); 
	B. assign your parameters (if any), Enclose the parameters in () 
		separated by ,
	C. write the function body (where the actions are being done), 
	D. and provide a return statement. Return statements stop the 
		execution of a function.*/

function search (arr, str) {
//a function named search with 2 parameters

/*2: Function must be Called/Invoked/Executed. A function call/invocation happens 
	when you give the name of the function you want to run, and pass in arguments. 
	Arguments are the values that replace the parameters given in the 
	declaration step.*/

function concat(wordOne, wordTwo) {
    return wordOne + wordTwo;
//invoking our function in the return statement

/*3: Function is the keyword that JavaScript interpreter looks for to know that the 
	code following is a function.*/

//example
function arrayValues(array) {
  //use a for loop to cycle thru array values stopping at the final array value
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

/*4: Anonymous functions are functions without names. They typically are not accessible
	after their initial creation.

//example
let show = function () {
    console.log('Anonymous function');
};

show();
//print to console: Anonymous function

  5: Functions in their entirety are hoisted to the top of our code. 
	They precede var statements.

  6: console.log() is a very basic example of a function.

  7: the word function can be replaced with =>
*/

// Example
//I: User Inputs Name (String)
//O: String + User Input
//C: Requires User Input
//E: None
// program to print the text
// declaring a function
function greet(name) {
    console.log("Hello " + name + ":)");
}

// variable name can be different
let name = prompt("Enter a name: ");

// calling function
greet(name);
