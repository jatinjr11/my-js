function badExample() {
    if (true) {
        var x = 1; // Function scoped
    }
    console.log(x); // 1 (accessible due to hoisting)
}
badExample();


function goodExample() {
    if (true) {
        let x = 1; // Block scoped
    }
    console.log(x); // ReferenceError: x is not defined
}

// goodExample();