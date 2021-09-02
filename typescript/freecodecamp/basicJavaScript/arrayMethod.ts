/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
--> Array REDUCE Method
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const numbers = [1, -1, 2, 3];

/* 
let total = 0;
for (const n of numbers) {
  total += n;
}

console.log(total); 
*/

//*** Apprach one - with initializer (2nd parameter of reduce method)
const total = numbers.reduce((accumulator: number, curretValue: number) => {
  return accumulator + curretValue;
}, 0);

// Whats happenning in the code above!! hmm..
// Initially a = 0, c = 1, so in First Iteration --
// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0 ; Second Iteration
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5

console.log(total);

//*** Apprach two - with initializer (2nd parameter of reduce method)
const totalSum = numbers.reduce(
  (accumulator: number, curretValue: number) => accumulator + curretValue
);
// Whats happenning in the code above!! hmm..
// Here, Initially as there is no initializer in reduce method, so a = 1 (first item of the array) & c = -1 (first item of the array), so in First Iteration --
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2 ; Second Iteration
// a = 2, c = 3 => a = 5 ; Third Iteration

console.log(totalSum);

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
--> Array FILTER Method
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
