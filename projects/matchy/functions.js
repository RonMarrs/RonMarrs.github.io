/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: an array of animals
//O: an object if animal exists, null if it doesn't
//C: search for animal name
//E: none
//decalre a function called search taking in an array and a string
function search (arr, str) {
    //assign a var search and look through our array for a value that matches str
    let result = arr.find( e => e.name === str);
    //if variable result finds a match return that animal's object
    if(result) {
        return result;
    }
    //if there is no match, returns false
    else {
        return null;   
    }
}   
console.log();


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: 3 paramters
//O: an object or null
//C: if the animal name exists, replace the entire object with a new object
//E: none
//write a function called replace with animals, name, replacement as parameters
function replace(animals, name, replacement) {
    //loop thru animals array using a for loop    
    for (let i = 0; i < animals.length; i++) {
        //test if animal name exists in the animals array to name string
        if (animals[i].name === name) {
            //if it exists, replace it with replacement object
            return animals[i] = replacement;
        }
        //if it doesn't exist return animals
        return animals;
        
    }
    
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: 2 parameters (array of animals and string of name)
//O: if the animal name exists, remove it              
//C: match animal by name
//E: none

//create a function called remove with parameters, animals, name
function remove(animals, name) {
    //loop over animal array
    for (var i = 0; i < animals.length; i++) {
        //if name in animals array matches name
        if (animals[i].name === name) {
        //remove the animal from animals array using splice
         return animals.splice(name, 1);
        }
    }   
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// function should add animal no other animal shares the same name

function add(animals, animal) {
    //create a variable to hold a boolean value if the animal in the array already exists
    var animalExists = false;
    //run an if lood to check if the name and species keys are in the object
    if (animal.name.length > 0 && animal.species.length > 0) {
            //if it does, run a for/if loop over the array
            for(var animalObject of animals) {
                //compare the array name and object name
                if (animalObject.name === animal.name){
                //if true, assign to animalExists variabke
                 animalExists = true;
                }
            }
                //if none of those conditions are false, push the animal object into the animals array
               if (animalExists === false) {
                 animals.push(animal)
        }
            //return array
            return animals;
    }

    
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
