/*
Returned from Other Functions: Functions can be returned as the result of another function's execution. This is a core aspect of closures and higher-order functions that generate or modify other functions.
*/

function createMultiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const multiplyByFive = createMultiplier(5);
console.log(multiplyByFive(10)); // Output: 50