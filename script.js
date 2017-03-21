
//Array Length
var fruits = ['mango', 'banana', 'orange', 'apple', 'lichi'];

frutis.length(); // The array length property returns the number of elements in an array. ;

for (var i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

//The Array.from() 
//This method creates a new Array instance from an array-like or iterable object.

Array.from('foo');// ["f", "o", "o"]

//The Array.isArray() determines whether the passed value is an Array.
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false

//The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]

//The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

var alpha = ['a', 'b', 'c'];
var numeric = [1, 2, 3];

alpha.concat(numeric);
// result in ['a', 'b', 'c', 1, 2, 3]


