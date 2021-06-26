// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //assign a variable with a function to test which value is greater
    return function(value) {
    
        //create an if statement comparing value > base
        //remember: if a number is passed in as a string, JS will still evaluate it as a number
        if(value > base) {
            //if both strings start w/ the same ltr, return true
            return true;
        }
        else {
            return false;
        }

        //if no match - return false
    }    
       // YOUR CODE ABOVE HERE //

}
/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
        return function(newValue) {
    
        //create an if statement comparing value > base
        //remember: if a number is passed in as a string, JS will still evaluate it as a number
        if(newValue < base) {
            //if both strings start w/ the same ltr, return true
            return true;
        }
        else {
            return false;
        }

        //if no match - return false
    } 
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //create a function with string as a parameter
    return function(string) {
        //change string to lowercase and startsWith to lowercase
        if(string.toLowerCase().startsWith(startsWith.toLowerCase())) {
            //if both strings start w/ the same ltr, return true
            return true;
        }
        //if no match - return false
        return false;
        
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
     //create a function with string as a parameter   
    return function(string) {
        //change string to lowercase and endsWith to lowercase
        if(string.toLowerCase().endsWith(endsWith.toLowerCase())) {
            //if both strings end w/ the same letter, return true
            return true;
        }
        //if no match, return false
        return false;
        
    }    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //create an array literal named arr
    let arr = [];
    //run a for loop over the values
    for (var i = 0; i < strings.length; i++) {
        //push to arr, running strings[i] thru the modify function
        arr.push(modify(strings[i]));
    }
    //return arr
    return arr;
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    for (var i = 0; i < strings.length; i++) {
        if (test(strings[i]) === false) {
            return false;
        }
    }
    return true;
   
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
