// Primitive

// 7 types : String , Number, Boolean, null, undefined, Symbol BigInt

const score =  100 ;
const scoreValue = 100.3;

const isLogged = false;
const outSideTemp = null;
// let userEmail = undefined;
let userEmail ;

let bigNumber = 1234567765432234n;


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof bigNumber);
// console.log(typeof outSideTemp);
// console.log(typeof userEmail);
// console.log(typeof myObj);
// console.log(typeof myFunction);
// console.log(typeof scoreValue);
// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3   



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(Non-Primitive)

// let myYtName = "Indori";



let userOne = {
    email: "userOne@gmial.com",
    upi: "user@ybl"
}

let userTwo = userOne;
userTwo.email = "jos@googl.com";

console.log(userOne);
console.log(userTwo);

