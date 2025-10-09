// Impure Function => a function can produce different output for the same input
// it can modify the state of the program
// it can have side effects

let total = 0; // state

function addTotal(value) {
    total += value;
    return total;
}

// console.log(addTotal(5));

// console.log(addTotal(5))

// what is currying ?
// it is a technique to convert a function with multiple arguments into a series of functions with a single argument
// it is a way to create a function that can be called with a single argument and then return a new function that can be called with the next argument
// Example :-  
function add(a) {
    return function (b) {
        return a + b;
    }
}

console.log("Dekho -> ",add(5)(5)); // 10
