/*
1. Square the value of every element in the array. Presume that you will only get numbers in the input array.
 const input = [1, 2, 3, 4, 5];
 output: - [1, 4, 9, 16, 25];
 */

const input = [1, 2, 3, 4, 5];
const reslt = input.map(ele => ele * ele);
console.log(reslt);
