// Rest Operator

function greet(message, ...names){
    console.log(message);
    console.log(names);
    console.log(typeof names);
}

greet("Hello", "Amit", "Rahul", "Ravi");


// it must be the last parameter
// function test(...a, b) { } // ❌ Error

// rest -> collect
// spread -> expand

