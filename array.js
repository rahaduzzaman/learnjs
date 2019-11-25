
section="ARRAYS In JavaScript", 
sectionDivider = "====================================\n*\n*---->\t" + section +"\n*\n====================================";
console.log(sectionDivider);

// simple array declaration
let myArr = ["Rahad", 1];
console.log(myArr);

// Arrays in an Array aka Multidimentional array
let multiArr = [["Hobby", 22] , ["Flying", 11111]];
console.log(multiArr);

// Accessing array with Indexs
let myArr2 = [10,20,30];
console.log(myArr2[1]);

// change the array value with index
myArr2[1] = 85;
console.log(myArr2); // Ourput: [10,85,30]

// Access Multidimentional Array with array indexes
let multiArr2 = [ [1,2,3], [4,5,6], [7,8,9], [10,11,12] ];
let myData = multiArr2[2][1];
console.log(myData); // Output should be 8

/* ===== Manulation of Array =====*/
// push() - Insert items to an Array
let myArr3 = ["Mango", "Papaya", "Banana"];
myArr3.push("Mandarine");
console.log(myArr3);
// Push in Multi Dimentional Array 
multiArr.push(["Eating", 9]);
console.log(multiArr);

// pop() - Remove Last item from an Array
let myArr4 = [ ["Mango", 4], ["Papaya", 6], ["Banana",12] ];
myArr4.pop();
console.log(myArr4); // Output - [ ["Mango", 4], ["Papaya", 6] ];

// shift() - Removes the First Items of the array
myArr4 = [ ["Mango", 4], ["Papaya", 6], ["Banana",12] ];
myArr4.shift();
console.log(myArr4); // Output - [ ["Papaya", 6], ["Banana",12] ];

// unshift() - adds an Item in the first place of the array
myArr4 = [ ["Mango", 4], ["Papaya", 6], ["Banana",12] ];
myArr4.shift(); // Now the array is - [ ["Papaya", 6], ["Banana",12] ];
myArr4.unshift(["Apple", 20]);
console.log(myArr4); // Output - [ ["Apple", 20], ["Papaya", 6], ["Banana",12] ];






