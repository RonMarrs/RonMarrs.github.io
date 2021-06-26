// VARIABLES:
/* Purpose
 * 0: We use variables in JavaScript to hold items in memory throughout the duration of a program.
 *	The term 'variable' refers to their very nature; once they are created; their assigned value
	or the type of value to which they point may change. As identifiers, variables point to
	values of a specific type; including: Number, String, Boolean, Array, Object, or other data
	types.
*/
 
/* Use
 * 0: To create a variable we use the keyword, var, followed by our desired variable name. It is best
	practice to give your variable a name that reflects it's value.
		Example: if we wanted to assign a variable to a person's first name; we might use:
		var firstName = "Ron"
 * 1: Did you notice that firstName is all one word and oddly capitalized? Variable names should be one
	word, and named in what's referred to as camelCase convention. When combining two or more words
	to formulate a variable name, the first word or letter is lower-cased and all remaining words
	have their first letter capitalized. Examples: fullName, dayOfMonth, array, aNewArray	
 * 2. There are two phases of using variables: declaration and initialization (or assignment).
*/
// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";
