/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//create a variable named animal and assign to an empty {}
var animal = {};
    //using dot notation, add a key value pair of species
    animal.species = "cat";
    //use bracket notation add a key value pair of name
    animal['name'] = "Sushi";
    //add a key of noises and assign it to an empty array
    animal.noises = [];
    //console.log animal
    console.log(animal);
    
    


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a variable named noises
var noises = [];
//using bracket notation give noises an element
// string with a sound your animal makes
noises[0] = 'Meow';

//add another noise to array
noises.push('Purr');
noises.push('Rawr');

//add annother element to the beginning of the array
noises.unshift('Hiss');

//add another element to the end of the array using bracket syntax
noises[noises.length] = 'Growl';

console.log(noises.length); //console log the length of noises
console.log(noises[noises.length -1]); //console the log the last element of noises
console.log(noises); //console log the whole array


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//using bracket sysntax assign noises property to noises array
animal.noises = noises; //assign animal.noises to the noises array
console.log (animal); //console log animal


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
    Objects can be accessed using dot notation or bracket notation.
 *
 * 2. What are the different ways of accessing elements on arrays?
    Indexing
 *
 * *******************************************************************
 */ 
 

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//assign a variable named animals and assign and empty array
var animals = [];

//push animal to animals
animals.push(animal);
console.log(animals);

//create a variable named duck
var duck = {
    //keys: species, name, noises
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh'],
}
animals.push(duck); //push duck to animals
console.log (animals); //console.log animals

//create two more animal objects bird and dog
var bird = {
    //keys: species, name, noises
    species: 'bird',
    name: 'Tweety',
    noises: ['chirp', 'coo'],
}
var dog = {
    species: 'dog',
    name: "Dot",
    noises: ['woof', 'bark'],
}
animals.push(bird); //push bird to animals
animals.push(dog);  //push dog to animals
console.log (animals); //console log animals
console.log (animals.length); //console log the length of animals

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//choose a data structure
//going with array because it is easy to access individual indexes

//assign a property to bird with an empty array containing an empty string
//create a variable named friends and assign to an empty array
//I: animals array
//O; index value of the input array element
//C: use math.floor and math.random, value must be random
//E: 
bird.friends = [""];
var friends = [];
    //create a function called getRandom
    function getRandom(array) {
        //loop over the value 
        for (let i = 0; i < array.length; i++) {
            //math.floor rounds the number down to the largest integer value
            //math.random produces a random number between two values established by array.length
            return Math.floor(Math.random((i) * array.length));
        }
    }
console.log(getRandom(animals));


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}