"use strict";
function sequentialSizes(num) {
  var answer = "";
  switch (num) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}
// Change this Value to test
console.log(sequentialSizes(1));

console.log(
  `Above is Sequesntial Size 
  ==========================
  Below is random range between two number`
);

function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}

console.log(randomRange(7, 15));
