"use strict";
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
/* ==> ch-9 : Match Letters of the Alphabet */
//N: Inside a character set, you can define a range of characters to match using a hyphen character: -.
/* // Example:
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);
 */
/* //Actual Test
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
console.log(result);
 */
// ________________________________________________________________________
/* ==> ch-10 : Match Numbers and Letters of the Alphabet */
/*
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result);
*/
// ________________________________________________________________________
/* ==> ch-10 : Match Single Characters Not Specified */
// Problem: Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
var quoteSample = "3 blind mice.";
var myRegex = /[^aeiou0-9]/gi; // Change this line
var result = quoteSample.match(myRegex); // Change this line
console.log(result);
