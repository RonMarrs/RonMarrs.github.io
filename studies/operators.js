// OPERATORS:
/* Purpose
  0: Operators in JavaScript are used to assign values, compare
     values, perform arithmetic operations, concatenate strings, and
     determine logic.
*/

/* Types
  0: Arithmetic - perform math between variables and/or values.
	A. + Addition
	B. - Subtraction
	C. * Multiplication
	D. / Division
	E. % Division Remainder
	F. ++ Increment
	G. -- Decrement
  1: Assignment - assign values to variables
	A. = Equals
	B. += Concatenates and Equals
	C. -= Subtracts and Equals
	D. *= Multiplies and Equals
	E. /= Divides and Equals
	F. %= Shows Remainder and Equals
  2: Comparison - are used in logical statements to determine
	the equality or difference between variables or values.
	1. == Equal To (Not Strict)
	2. === Strict Equality
	3. != Not Equal (Bang! Operator)
	4. !== Not Strictly Equal
	5. > Greater Than
	6. < Less Than
	7. >= Greater Than or Equal To
	8. <= Less Than or Equal To
  3: Logical - determine the relationship between variables or values.
	1. &&	And
	2. ||	Or
	3. !	Not
*/

/* Use
  0: - Arithmetic Operators perform and work exactly like math.*/
var x = 6;
var y = 10;
console.log(x + y); // prints 16

//1: - Assignment Operators are the most common operator type.//
var a = 'Holly ';
var b = ' Golightly';
var c = a += b; //assigning a new variable by combining a and b
console.log(c); // prints HollyGolightly
 

//2: - Comparison Operators are used to determine Boolean values.//
var c = 12 + 12;
var d = 4 * 6;
if (c === d) {
console.log("These are equal values!");
} //this returns the string because c === d is true.


//3: - Logical Operators determine the truthiness between two values.//
if (100 > 99 && 200 > 199) {
console.log("These are both true statements.");
} //this returns the string because both are true.
