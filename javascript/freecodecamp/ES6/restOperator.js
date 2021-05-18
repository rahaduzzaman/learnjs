"use strict";
/* const sum = (x: number, y: number, z: number) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
};

console.log(sum(3, 5, 7));
 */
var sum = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (a, b) { return a + b; }, 0);
};
console.log(sum(3, 5, 7));
