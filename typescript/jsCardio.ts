//CHALLANE 1 - REVERSE A STRING
// return a string in reverse
// for ex: reverseString("hello") --> 'olleh'

function reverseString(str: string) {
  // return str
  //     .split('')
  //     .reverse()
  //     .join('');

  /* _____ With loop not using JS Reverse method _____*/
  let strArr = str.split("");
  let revArr: any = [];
  for (let i = strArr.length - 1; i >= 0; i--) {
    revArr.push(strArr[i]);
  }
  return revArr.join("");
}
console.log(reverseString("Rahad"));
