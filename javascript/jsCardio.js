"use strict";
//CHALLANE 1 - REVERSE A STRING
// return a string in reverse
// for ex: reverseString("hello") --> 'olleh'
function reverseString(str) {
    // return str
    //     .split('')
    //     .reverse()
    //     .join('');
    var strArr = str.split('');
    var revArr = [];
    for (var i = strArr.length - 1; i >= 0; i--) {
        // console.log(strArr[i]);
        revArr.push(strArr[i]).join('');
    }
    return revArr;
}
console.log(reverseString("Rahad"));
