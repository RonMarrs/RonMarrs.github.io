//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//13
function objectValues(object) {
    //assign an empty array
    var arr = [];
    for (var key in object) {
        arr.push(object);
    }
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//14
function keysToString(object) {
    var arr = [];
    for (var key in object) {
        arr.push(key);
    }
    return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//15
function valuesToString(object) {
    var arr = [];
    for (var key in object) {
        if (typeof object[key] === 'string') {
        arr.push(object[key]);
        }
    }
    return arr.join(" ");  
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//16
function arrayOrObject(collection) {

    if(Array.isArray(collection)) {
    return 'array';
    }   
    else if(typeof collection === 'object'){
    return 'object';
    }

}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//17
function capitalizeWord(string) {
 //create variable to save the modifications of string
// replace the character at index 0 with an uppercase value and concat the remainder of the string
  var newString = string.charAt(0).toUpperCase() + string.slice(1);
//return the newly created variable
  return newString;

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
//18
function capitalizeAllWords(string) {
    var newString = string.split(" ");
  //loop over newString
    for (let i = 0; i < newString.length; i++) {
    //access the first letter charAt(0) and change with .toUpperCase and add this to the remainder of the word slice at (1)
    newString[i] = newString[i].charAt(0).toUpperCase() + newString[i].slice(1);
    }
	//join our words back together and assign to a new variable
    var joinedString = newString.join(' ');
  //return the newly created variable
    return joinedString;
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//19
function welcomeMessage(object) {
var name = capitalizeWord(object.name);
   return `Welcome ${name}!`; // or whatever your preferred syntax there
}
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//20
function profileInfo(object) {
    var name = capitalizeWord(object.name);
    var species = capitalizeWord(object.species);

    return name + " is a " + species;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//21
function maybeNoises(object) {
    
    //if variable result finds a match return that animal's object
   var arr = [];
    for (var key of object) {
        if (Object.keys(object) === object.noises) {
        arr.push(object[key]);
        return ` ${object[key]} `;
        }
        
    //if there is no match, returns false
        else {
        return 'there are no noises';  
        }
    }
}
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//22
function hasWord(string, word) {
    let newString = string.split(" ");
    for (let i = 0; i < newString.length -1; i++) {
        if (newString[i].toLowerCase() === word.toLowerCase()) {
            return true;
        }
        else {
            return false;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//23
function addFriend (name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//24
function isFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//25
function nonFriends(name, array) {
    //declare an empty array called noPal
    var noPal = [];
    //use for loop to cycle over each person
    for (var i = 0; i < array.length; i++) {
        //if statement to see if  name isn't already in friends array
        if (array[i].name !== name && !array[i].friends.includes(name)) {
            //push array[i].name to noPal
            noPal.push(array[i].name);
        }
    }
    return noPal;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//26
function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//27
function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//28
function dedup(array) {
    //set an empty array called noDupes
    var noDupes = [];
    //run a for loop to check each value in array
    for (var i = 0; i < array.length; i++) {
        //need a boolean result: false (push to noDupes; true (return noDupes
        if (noDupes.includes(array[i]) === false) {
            noDupes.push(array[i]);
        }    
        
    }
    return noDupes;

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}