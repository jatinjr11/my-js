// Spread Operator

// Spread Operator is used to spread the elements of an array or object into individual elements or properties. 
const array = [1, 2, 3, 4, 5];
// console.log(array);
// console.log(...array);

const obj_1 = {
    name: 'John',
    age: 30
}

const obj_2 = {
    name: 'Alice',
    age: 18
}

console.log({...obj_1, ...obj_2});


