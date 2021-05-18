/* "use strict";
//Nested loops {Multidimentional Array}
function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    // Only change code above this line
    return product;
}
console.log(multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7],
]));
 */

function uniqPair(inArr) {
  for (var i = 0; i < inArr.length; i++) {
    var wa = inArr[i].split("");
    //   for(var j = )
    console.log("-->" + wa);
  }
}

uniqPair(["similar", "ground", "heaven", "hell", "earth", "liar", "shelf"]);
