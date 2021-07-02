// DATATYPES:
/* Purpose
  0: Data Types refer to the types of values used in programming. They provide
	instructions to the JavaScript interpreter on what to do with a value.
	There are two data types, simple and complex; and dependant upon
	the type used, we can store primitive data, or much larger containers
	that we can manipulate.
*/

/* Types
  0: Simple Data Types - Data Types refers to the types of values used in programming. 
	Simple data types are also referred to as primitive. They are immutable, 
	in that they do not hold, collect or aggregate other values. They are held to
	no more than 8 bytes of memory.
	
	A: String - this is a series of words, numbers, characters enclosed with
		 an opening and closing “ “.
	B: Number - Number data types work exactly as they do in math. They can be
		positive or negative, or decimals. You also can add, subtract,
		divide, multiply numbers directly in the Assignment.
	C: Boolean - this is a datatypes represented by true or false.
	D: null - an assigned value often used to reset or clear a variable.
	E: undefined - a value that replaces another value that has not been assigned.
	F: NaN (Not a Number) - the result of running a calculation that includes a 
		value that is not a number.

  1: Complex Data Types - Complex Data Types are also used as values in programming. 
	These data types are mutable and aggregate other values, so they can be of 
	any size and are not constrained to 8 bytes of Memory.

	A: Array[] - are also called collections. They can collect/hold all data types, 
		including other arrays. Each value in an array is referred to as an 
		element and each element is indexed, always beginning with 0. 
		Each element within an array can be accessed using bracket notation or 
		.length -1. The unique construct of arrays allows us to group values 
		together so they can be passed and used as one. Arrays are assigned to a 
		variable and named according to the arrays contents.
	B: Object {} - like Arrays, Objects are also a collection. However, the values 
		within an Object are in key-value pairs. A person’s profile is a good 
		analogy for how objects construct its key-value pairs. Keys and Values 
		within an object can be accessed using dot notation or bracket notation, 
		and because of the relationship between the key and its value, objects are 
		associative arrays. The keys within the object are strings.
	C: Function - allows the coder to contain a block of code, and allows for 
		repeatable execution of that code. The function accepts input, 
		processes the input and returns a new data value. 
			0: Functions must be Declared/Defined. This includes naming your 
				function (this should be relative to the action being taken); 
				assign your parameters (if any), write the function body 
				(where the actions are being done), and provide a return
				statement. Return statements stop the execution of a function.
			1: Functions must be Called/Invoked/Executed. A function 
				call/invocation happens when you give the name of the function
				you want to run, and pass in arguments. Arguments are the 
				values that replace the parameters given in the 
				declaration step.
*/

/* Use (Simple Data Types)
   0: String. This can be letters, numbers, characters, anything that can be typed, enclosed in
	quotes. The quotes can be single or double. If a string contains a " and is enclosed in
	" - then a \" within the string must be used to tell the JS Interpreter that this is
	is part of the string. */

var name = "Ron";
//"Ron" is our string value.

/* 1: Number. When a number is used as a datatype, nothing special needs to be done, the number
	value can be written exactly as it is.*/

let number = 1334;
//1334 is our numeric datatypes and it is assigned to the variable number.

/* 2: Boolean. These datatypes are often used in complex data types to determine Control Flow;
	but the values by themselves are a simple datatype. They will always return true or
	false.*/
let firstName = "Ron"; //establish a variable
let lastName = "Marrs"; //establish another variable
if (firstName === lastName) { //lets compare the two to trigger a boolean condition
	console.log("You have an odd name!") //the result of a true statement
	} else if (firstName !== lastName) { //bang! flips the whole thing to opposite day
	console.log(firstName + " " + lastName); //our compare was false so we get Ron Marrs
	} else
	console.log("Something has gone wrong!"); //to capture any other results


/* Use (Complex Data Types)
   0: Array: these containers can hold all of the datatypes, including other arrays.*/
var array = ["string", 23, true, ["a nested array", 12]];
console.log(array);
//prints to the console: [ 'string', 23, true, [ 'a nested array', 12 ] ]

/* 1: Object: a container of details, sorthed into key -value pairs that relate
	to the name of the object. An objects values can include all other data types.*/
var employee01 = {
	name: "Rolf Warren",
	title: "Manager",
	shift: "Morning"
}
  console.log(employee01);
//prints to console: { name: 'Rolf Warren', title: 'Manager', shift: 'Morning' }

/* 2: Functions: these are the powerhouse of complex data types. They take an
	assortment of data types and perform a set of defined manipulations on the
	values to give us new values, or to manage the control flow.*/
function createStudent(name, age, gender) { //our function with 3 parameters
	var obj = { name: name, age: age, gender: gender }; //an object in our function
            return obj;
        }
        var student = createStudent("Ron Marrs", 48, "Male"); //pass in arguments
        console.log(student);
//prints to console: { name: 'Ron Marrs', age: 48, gender: 'Male' }
