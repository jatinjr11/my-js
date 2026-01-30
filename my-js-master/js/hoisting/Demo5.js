/*

let name = "java";

// Destructuring
let [a1, a2, a3, a4,a5] = name;

console.log(a1); // h
console.log(a4); // a
console.log(a5); // undefined


// Create an Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
// let [fruit1, fruit2] = fruits;
let [fruit1,,,fruit2] = fruits;


console.log(fruit1); 
console.log(fruit2); 
*/

// rest property 
const numbers = [10, 20, 30, 40, 50, 60, 70];

// Destructuring
const [a,...rest] = numbers;
// const [...rest] = numbers;

// console.log(a); 
console.log(rest); 