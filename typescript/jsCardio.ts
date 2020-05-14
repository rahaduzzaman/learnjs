//CHALLANE 1 - REVERSE A STRING
// return a string in reverse
// for ex: reverseString("hello") --> 'olleh'

function reverseString(str: string) {
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
  let revStr = "";
  return str.split("").reduce((revStr, char) => (revStr = char + revStr), "");
}
console.log(reverseString("Wonderful"));
