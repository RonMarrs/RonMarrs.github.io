// STRING-MANIPULATION:
/* Purpose
  0: There are methods and properties available that allow the coder to access strings. 
	Strings are indexed in the same fashion as arrays. Starting on the left side, 
	we begin with the first letter at index 0, and add 1 as we move to the right, 
	including spaces and special characters. 
*/

/* Types
  0. charAt() – returns the character at the index in the ()
  1. indexOf(‘ ‘) – returns the index number of the first instance of a character in a string.
	 Including more than one character will still only return the index of the first
	 character in the string.
  2. .slice(#, #) – returns the characters between the two indexes in ( ). 
	The first # returns the character at that index, the second # returns the
	character at the index just prior to its index.
  3. .length – returns the number of characters in a string (starts counting at 1)
  4. .toUpperCase() – changes all letters to uppercase letters
  5. .toLowerCase() – changes all letters to lowercase letters
  6. .split – breaks apart a string at the designated character and returns
	 the values in an array
  7. .trim – removes the empty spaces at the beginning or end of a string
  8. .replace – replaces a value with another value
  9. .concat – use to join strings to together that can assigned as 
	one string to a new variable
 10. .substring – takes your start index and end index and outputs a string made from 
	the string between those 2 indexes. The second index acts just like .slice
*/

/* Use
  0: charAt()*/
var str = newString( "This is string" );
console.log("str.charAt(0) is:" + str.charAt(0)); 
//prints to the console: str.charAt(0) is:T

//1: indexOf()//
var sampleStr = "Hi, Ron!";
sampleStr.indexOf("Ron", 0);
//prints to the console: 4  -//H(0)i(1),(2) (3)R(4)

//2: .slice()//
const strr = 'The quick brown fox jumps over the lazy dog.';
console.log(strr.slice(31));
//prints to the console: "the lazy dog."

//3: .length//
let myString = 'Lilacs';
console.log(myString.length);
//prints to the console: 6

//4: .toUpperCase()//
let newString = 'Les Fleurs Du Mal';
console.log(newString.toUpperCase());
//prints to the console: LES FLEURS DU MAL

//5: .toLowerCase()//
let rudeString = 'GOOD MORNING, COFFEE IS READY!';
console.log(rudeString.toLowerCase());
//prints to the console: good morning, coffee is ready!

//6: .split()//
var str = 'Charles Baudelaire wrote Les Fleurs Du Mal';
var newStr = str.split(' ');
console.log(newStr[6]);
//prints to the console: Mal

//7: .trim()//
var str = 'Edgar Allan Poe wrote The Raven';
var newStr = str.trim(' ');
console.log(newStr[22]);
//prints to the console: T

//8: .replace()//
let strrr = 'I will see the shades you become...';
let newStrr = strrr.replace('will','shall');
console.log(newStrr);
//prints to the console: I shall see the shades you become...

//9: .concat()//
var firstName = "Alex ";
var lastName = "Ross";
var fullName = firstName.concat(lastName);
console.log(fullName);
//prints to the console: Alex Ross

//10: .substring()//
var value = "23Tables";
var fix = value.substring(0, 2);
console.log(fix);
//prints to the console: 23

