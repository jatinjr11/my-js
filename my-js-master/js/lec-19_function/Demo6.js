/*
Passed as Arguments: Functions can be passed as arguments to other functions. This is fundamental to concepts like callbacks, where a function is executed after another operation completes.
*/
function executeOperation(operation, value) {
    operation(value);
}

function double(num) {
    console.log(num * 2);
}

executeOperation(double, 5); // Output: 10