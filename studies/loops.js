// LOOPS:
/* Purpose
  0: Loops are built-in constructs that allow the coder to repeat
     an instruction multiple times. It incorporates the DRY method; 
     Do Not Repeat Yourself. The use of loops can eliminate lines of 
     repetitive code that wastes memory resources and time. 
*/

/* Types
  0: For Loop - when we know exactly how many times we want to
	execute a line of code, a for loop is an excellent solution. It is 
	constructed of 3 parts: an initialization/starting condition – our stop
	condition – and our increment.
  1: For In Loop - When looping over an object, the for in loop is the only
	option. The for in loop pulls out all of the keys of an object one by one.
  2: While Loop - the best use for while loops is when you want to loop based on
	whether or not a condition is true, or when you need to repeat an action
	for an indefinite number of times each time.
*/

/* Use
  0: - For Loop*/
//create an array called production with 4 strings as parameters.
const production = ["Cosmetics", "Wardrobe", "Scripts", "Stylist"];
//loop over the values
for (let i = 0; i < production.length; i++) {
  console.log(production[i]);
} //prints our 4 production items to the console, one item each line

//1: - For In Loops are used for objects.//
//create an object named actor
const actor = {
    name: 'Mark Maron',
    skill: 'high',
    age: 52
}

// using for...in
for ( let key in actor ) {
    console.log(actor[key]);
} //prints Mark Maron, high, 52 to the console.

//2: - While Loop//
//how many times do we want to run the loop?
let text = "";
let i = 0;
while (i < 10) {
  //creates the message and joins it with our variable i
  text += "The number is " + i;
  //increments thru the numbers until we hit <10
  i++;
}
// prints 9 to the console.
