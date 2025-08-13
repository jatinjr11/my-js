// Impure Function => a function can produce different output for the same input
// it can modify the state of the program

let total = 0; // state

function addTotal(value) {
    total += value;
    return total;
}

console.log(addTotal(5));

console.log(addTotal(5))
