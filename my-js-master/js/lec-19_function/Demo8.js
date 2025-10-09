// Pure Functions => a function that always produces the same output for the same input
// it cannot modify the state 
// it cannot have side effects
function add(a, b) {
    return a + b;
}

console.log(add(3,5))
console.log(add(3,5))