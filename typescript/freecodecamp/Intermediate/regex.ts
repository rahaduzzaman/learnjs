/* ========================= 
    REGULAR EXPRESSION 
============================*/
// ________________________________________________________________________
/* ==> ch-1 : Using the Test Method */
/* 
let myString = "Hello, World!";
let myRegex = /Hello/;
console.log(myRegex.test(myString));  
*/

// ________________________________________________________________________
/* ==> ch-2 : Match Literal Strings */
/* 
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
console.log(result);
 */

// ________________________________________________________________________
 /* ==> ch-3 : Match a Literal String with Different Possibilities */
/* 
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
console.log(result);
 */

// ________________________________________________________________________
/* ==> ch-4 : Ignore Case While Matching */
/* 
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);
console.log(result);
 */

// ________________________________________________________________________
/* ==> ch-5 : Extract Matches */
/* 
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex);
console.log(result);
 */

// ________________________________________________________________________
/* ==> ch-6 : Find More Than the First Match */
//  To search or extract a pattern more than once, you can use the g flag.

/* let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line
console.log(result);
 */

// ________________________________________________________________________
/* ==> ch-7 : Match Anything with Wildcard Period */
// Q: Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.
/* 
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/gi; // Change this line
let result = unRegex.test(exampleStr);
console.log(result);
 */

// ________________________________________________________________________
/* ==> ch-8 : Match Single Character with Multiple Possibilities */
// N: Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.
// Q: Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.
/* 
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
console.log(result);
 */

 // ________________________________________________________________________
/* ==> ch-8 : Match Single Character with Multiple Possibilities */