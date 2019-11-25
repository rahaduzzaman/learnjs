section="Types In JavaScript", sectionDivider = "====================================\n*\n*---->\t" + section +"\n*\n====================================";
console.log(sectionDivider);

// Type Basic: Strings and Numbers

let value = "apple";
console.log( typeof(value) ); // typeof() is a function to find the type of any variable

value = 90;
console.log( typeof(value) );

value2 = "9";
console.log(value + value2); // output: "909" ; NOTE: NOT 99 because value2 is string type so it concatenate two values not perform add operation

let sum = value + value2;
console.log(typeof(sum)); // output: "string" ; NOTE: Concatenate of a number and string give the output which type is string

let val = 4.1 + 4.3;
console.log(val); // Output: 8.399999999999999; NOTE: output is not 8.4

let val2 = 10/0;
console.log(val2); // Output is Infinity 

val2 = -10 / 0;
console.log(val2); // Output is -Infinity

val2 = 0 / 0;
console.log(val2); // Output is NaN
console.log(typeof(val2)); // Output is number O.o


// Type Basic: Boolean

let isAnswer = true, isQuestion;
console.log(isAnswer, typeof(isAnswer) ); // Output : true and print the Type is boolean;

isQuestion = false; // now isQuestion has false value
console.log(isQuestion, typeof(isQuestion) ); // // Output : false and print the Type is boolean 


// Type Basic: Undefined and Null
let noValue;
console.log(noValue, typeof(noValue) ); // Output: undefined and type also undefined as no value is uninitialized

noValue = null;
console.log(noValue, typeof(noValue) ); // Output: null and type is object - In javascript, null value is considered as an object