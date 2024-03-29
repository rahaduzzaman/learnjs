"use strict";
//CHALLANE 1 - REVERSE A STRING
// return a string in reverse
// for ex: reverseString("hello") --> 'olleh'
function reverseString(str) {
  ////////////////////////////////////
  // return str
  //     .split('')
  //     .reverse()
  //     .join('');
  /* _____ With loop not using JS Reverse loop method _____*/
  // let strArr = str.split("");
  // let revArr: any = [];
  // for (let i = strArr.length - 1; i >= 0; i--) {
  //   revArr.push(strArr[i]);
  // }
  // return revArr.join("");
  /* _____ With loop not using JS loop method _____*/
  // let revStr = "";
  // for (let i = 0; i < str.length; i++) {
  //   revStr = str[i] + revStr;
  // }
  // return revStr;
  ///////////////////////////////////////
  // let revStr = "";
  // for (let char of str) {
  //   revStr = char + revStr;
  // }
  // return revStr;
  ///////////////////////////////////////
  // let revStr = "";
  // str.split("").forEach((char) => (revStr = char + revStr));
  // return revStr;
  ///////////////////////////////////////
  var revStr = "";
  return str.split("").reduce(function (revStr, char) {
    return (revStr = char + revStr);
  }, "");
}
// reverseString("Wonderful");
//CHALLANGE 2: VALIDATE A PALINDROME
//Reurn true if palindrome and false if not
// for example: isPalindrome(racecar) == 'true';
// isPalindrome(hello) == 'false'
// function isPalindrome(str: string) {
//   const revStr = str.split("").reverse().join("");
//   if (revStr === str) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isPalindrome("hello"));
// console.log(isPalindrome("madam"));
///////////////////////////////////////////
//CHALLANGE 3: REVERSE AN INTEGER
//Reurn an integer in reverse
// for example: reverseInt(123) = '321';
function reverseInt(integer) {
  var revInt = integer.toString().split("").reverse().join("");
  return parseInt(revInt) * Math.sin(integer);
}
// console.log(reverseInt(1234));
//CHALLANGE 4: CAPITALIZE A WORD
//Return a string with first letter of each word is Capitalize
//ex: capitalizeLetters('i love javascript') === "I love Javascript"
function capitalizeLetters(str) {
  // let word = str.toLowerCase().split(" ");
  // for (let i = 0; i < word.length; i++) {
  //   word[i] = word[i].substring(0, 1).toUpperCase() + word[i].substring(1);
  // }
  // return word.join(" ");
  /////////////////////////////////////////////
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
  ////////////////////////////////////////////
  // return str.replace(/\b[a-z]/gi, function (char) {
  //   return char.toUpperCase();
  // });
}
// console.log(capitalizeLetters("i love javascript"));
//CHALLANGE 5: MAX CHARACTER
// Return the character that is most common in the string
// ex. maxCharacter(Java) == "a"
function maxCharacter(str) {
  var charMap = {};
  var maxChar = "";
  var maxNum = 0;
  str.split("").forEach(function (char) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
  console.log(charMap);
  for (var char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
// console.log(maxCharacter('mmmaaa'))
//CHALLANGE 6: FIZZBUZZ
//Write a program that prints all the number for 1 to 100, For multiple of 3
