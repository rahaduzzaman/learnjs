//=============================
//--> Array Challange- "Stand in Line"
//=============================

/* function nextInLine(arr: any[], item: number) {
  // Only change code below this line
  arr.push(item);
  var removed = arr.shift();
  return removed; // Change this line
  // Only change code above this line
} 

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
 */

//=============================
//--> If-Else Challange- "Golf Code"
//=============================
var names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];
function golfScore(par: number, strokes: number) {
  // Only change code below this line
  /* if (strokes <= par) {
    if (strokes == 1) {
      return "Hole-in-one!";
    } else if (strokes <= par - 2) {
      return "Eagle";
    } else if (strokes <= par - 1) {
      return "Birdie";
    } else if (strokes == par) {
      return "Par";
    }
  } else {
    if (strokes === par + 1) {
      return "Bogey";
    } else if (strokes === par + 2) {
      return "Double Bogey";
    } else if (strokes >= par + 3) {
      return "Go Home!";
    }
  } */

  //  another way
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else {
    return names[6];
  }

  // Only change code above this line
}

console.log(golfScore(4, 2));
