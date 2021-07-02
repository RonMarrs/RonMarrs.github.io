
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles() {
//create a for loop that adds a # to each pass
  
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    //a for statement is needed to loop thru numbers 1 - 15
    for (var i=1; i<=15; i++) {
        // number divisible by 3 and 5 will
        // always be divisible by 15, print
        // 'FizzBuzz' in place of the number
        //if a number is divisible by 15 with 0 remainder (%) print FizzBuzz
        if (i%15 === 0) {   
            console.log("fizzbuzz");
        }
        // number divisible by 3? print 'Fizz'
        // in place of the number
        //if a number is only divisible by 3 with no remainder, print Fizz
        else if ((i%3) === 0) {
            console.log("fizz");               
        } 
        // number divisible by 5, print 'Buzz'
        // in place of the number
        //if a number is divisible by only 5 with no remainder, print Buzz
        else if ((i%5) === 0) {                  
            console.log("buzz");               
        }
        //print all remaining numbers 1-100 that aren't divisible by 3, 5 or 15
        else {// print the number       
            console.log(i);
        }
    }
    return fizzBuzz[i];
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard() {
  let size = 8;

  let board = "";

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x + y) % 2 == 0) {
      board += " ";
     } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
