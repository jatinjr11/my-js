function outerFunction() {
    let outerVariable = "Hello from outer!";

    function innerFunction() {
        console.log(outerVariable); // innerFunction accesses outerVariable
        outerVariable = "hello from outer-2"
        console.log(outerVariable); // innerFunction accesses outerVariable
    }

    return innerFunction;
}

const myClosure = outerFunction(); // outerFunction executes and returns innerFunction
myClosure(); // innerFunction is called, still accessing outerVariable