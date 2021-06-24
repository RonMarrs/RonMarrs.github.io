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
    for (var i=1; i<=100; i++)
    {
        // number divisible by 3 and 5 will
        // always be divisible by 15, print
        // 'FizzBuzz' in place of the number
        if (i%15 === 0) {   
            console.log("FizzBuzz");
        }
        // number divisible by 3? print 'Fizz'
        // in place of the number
        else if ((i%3) === 0) {
            console.log("Fizz");               
        } 
        // number divisible by 5, print 'Buzz'
        // in place of the number
        else if ((i%5) === 0) {                  
            console.log("Buzz");               
        }
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