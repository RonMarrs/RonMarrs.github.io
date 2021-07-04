// PSEUDOCODE:
/* Purpose
  0: Pseudocode are line blocks that outline and describe the code within our program.
  1: Pseudocode breaks are code into smaller digestable bits and describes the code
	that immediately follows purpose and function within the code.
  2: Pseudocoding is a valued part of code as it provides an outline of what our
	code is going to achieve and the steps we are going to take to accomplish
	our intended purpose in writing the code.
  3: The JavaScript Interpreter does not read pseudocode or attempt to interpret it, 
	it's use is purely for the benefit of the coder and anyone who may look at the
	code after it has been written.
*/

/* Types
  0: // - This is used for single line pseudocode comments. To prevent the JS Interpreter
	   from attempting to read the pseudocode, the comment must be preceded with //.
  1: /* - Multi-line pseudocode is code that extends beyond one line in the program. It is
	   considered best practice to not extend code off the available window resulting
	   in side-to-side scrolling, so multi-line commenting may be needed. This is 
	   accomplished by starting the comment line with /* and at the end of the 
	   comment, close it with */ 

// Examples

function test(grade){
//WRITE YOUR CODE HERE//
if (grade === 100) {
  console.log("Green");  
  //creating first condition of 100 = Green
  }
else if (grade <= 99 && grade >= 70) { 
  //creating first else/if 99 - 70 = Yellow
  console.log("Yellow");
}
else if (grade <= 69 && grade >= 1) { 
  //creating second else/if 69 - 1 = Red
  console.log("Red");
}
else if (grade < 1) {  
  console.log("No Attempt");
  /*setting condition of score less than 1
  could have written another else statement to establish another condition*/
  
  
}
}