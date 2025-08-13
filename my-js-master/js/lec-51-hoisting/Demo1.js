// Variable Hoisting (with var)
console.log(myVar); // Output: undefined
var myVar = 10;
console.log(myVar); // Output: 10

// Function Hoisting
myFunction(); // Output: "Hello from myFunction!"
function myFunction() {
  console.log("Hello from myFunction!");
}

// Variable Hoisting (with let - Temporal Dead Zone)
// console.log(myLetVar); // This would throw a ReferenceError
let myLetVar = 20;
console.log(myLetVar); // Output: 20