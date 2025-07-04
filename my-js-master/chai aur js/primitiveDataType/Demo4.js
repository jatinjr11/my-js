/*
1. NaN (Not a Number)
A special number representing invalid math operations.

NaN is never equal to itself (use isNaN() or Number.isNaN()).
*/
console.log(0/0) // NaN
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(Number.isNaN(NaN)); // true

// null vs undefined
console.log(typeof null); // object (historical bug)
console.log(typeof undefined); // undefined