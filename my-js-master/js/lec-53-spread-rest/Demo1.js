// Spread Operator

// Spread Operator is used to spread the elements of an array or object into individual elements or properties. 
const array_1 = [1, 2, 3, 4, 5];
const array_2 = [6, 7, 8, 9, 10];
// console.log(array);

// spread 
// console.log(...array_1, ...array_2);

// merging
// console.log([...array_1, ...array_2]);

const obj_1 = {
    name: 'John',
    age: 30
}

const obj_2 = {
    name: 'Alice',
    age: 18
}

// console.log({...obj_1, ...obj_2});
// console.log(...obj_1, ...obj_2);

/*
//Copy Array (Shallow Copy)
const arr1 = [1,2,3];
// const arr2 = arr1;
const arr2 = [...arr1];

arr2.push(4);

console.log(arr1);
console.log(arr2);

// merged array
const a = [1,2];
const b = [3,4];

// let merged = [a,b];
let merged = [...a, ...b];

console.log("Merged Array: ", merged);  // [1, 2, 3, 4]


// copy objects
let user1 = { name: "Sachin", age: 25 };
// let user2 = user1;
let user2 = {...user1};

user2.age = 80;

console.log(user1.age);

*/