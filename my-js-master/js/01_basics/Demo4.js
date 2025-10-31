let age = 16;
let status = (age > 18) ? "i can vote" : "i can't vote";
// console.log(status);

// falsy values
// 0, "", null, undefined, NaN, false

/*
let myNumber = 0;
if (myNumber)
console.log("it is truthy")
else
console.log("it is falsy")

let value = 'kkkk';
let temp = Boolean(value);
console.log(temp);
*/

// short circuiting
// && - if first value is false then it will not check second value
console.log(false && "kkk");

// || - if first value is true then it will not check second value
console.log(false || 6 || 8 ) 