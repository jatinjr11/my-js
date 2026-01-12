// Non-Primitive (Reference) D. Types -> they store collections of data 
// They stored by refrence(memory address) not by value
// They are mutable (can be changed)
// 1. Array
// 2. Object
// 3. Function

// Array
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(typeof arr);

let arr1 = [1, 2];
console.log("Arr-1: ",arr1);
let arr2 = arr1; // `arr2` references the same array
console.log("Arr-2: ",arr2);
arr1.push(3);
console.log("Arr-1: ",arr1); // [1, 2, 3]
console.log("Arr-2: ",arr2); // [1, 2, 3] (modified)

