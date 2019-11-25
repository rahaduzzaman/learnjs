
section="Strings In JavaScript", 
sectionDivider = "====================================\n*\n*---->\t" + section +"\n*\n====================================";
console.log(sectionDivider);
// concatenating String
let firstName = "Mohammad ", lastName = "Rahaduzzaman";
console.log(firstName + lastName);
//We can also concate like this
console.log(firstName += lastName);

// getting String length
let lastNameLength = lastName.length;
console.log(lastNameLength);

//Bracket Notation to find character of a String
let firstLetterOflastName = lastName[0]; // Change the Index number to get particlar letter
console.log(firstLetterOflastName);

/*
Because of the immuatability of String, we cannot change single character of a string. 
We have to change the whole string
*/
let gretting = "Jello World";
// gretting[0] = "H" we cannot do that, because In JavaScript string is immutable
gretting = "Hello World";

// Bracket Notation to find Nth charater of a string
let thirdLetterOflastName = lastName[3]; // Change the Index number to 2 to get third letter
console.log(thirdLetterOflastName);

// getting second last letter
let secondLastLetterOflastName = lastName[lastNameLength - 2]; // -2 here instead of -1 is because javascript starts counting from 0;
console.log(secondLastLetterOflastName);

// WORD BLANKS
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    let result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    return result;
}

//call the funtion and pass parameters
console.log(wordBlanks("dog", "big", "ran", "quickly"));



 
