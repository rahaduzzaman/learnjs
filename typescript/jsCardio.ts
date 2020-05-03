//CHALLANE 1 - REVERSE A STRING
// return a string in reverse
// for ex: reverseString("hello") --> 'olleh'

function reverseString(str: string) {
    let strArr = str.split('');
    strArr = strArr.reverse();
    return strArr.join('');
}

console.log(reverseString("Rahad"));