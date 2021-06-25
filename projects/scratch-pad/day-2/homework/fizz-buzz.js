// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    //a for statement is needed to loop thru numbers 1 - 100
    for (var i=1; i<=100; i++)
    {
        // number divisible by 3 and 5 will
        // always be divisible by 15, print
        // 'FizzBuzz' in place of the number
        //if a number is divisible by 15 with 0 remainder (%) print FizzBuzz
        if (i%15 === 0) {   
            console.log("FizzBuzz");
        }
        // number divisible by 3? print 'Fizz'
        // in place of the number
        //if a number is only divisible by 3 with no remainder, print Fizz
        else if ((i%3) === 0) {
            console.log("Fizz");               
        } 
        // number divisible by 5, print 'Buzz'
        // in place of the number
        //if a number is divisible by only 5 with no remainder, print Buzz
        else if ((i%5) === 0) {                  
            console.log("Buzz");               
        }
        //print all remaining numbers 1-100 that aren't divisible by 3, 5 or 15
        else {// print the number       
            console.log(i);
        }
    }
    return fizzBuzz[i];
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}