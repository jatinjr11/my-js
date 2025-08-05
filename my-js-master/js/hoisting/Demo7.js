function test() {
    if (true) {
        var x = 10;
        let y = 20;
        const z = 30;
    }
    console.log(x); //10
    // console.log(y); //ReferenceError: y is not defined
    // console.log(z); //ReferenceError: z is not defined
}

test();
console.log(x);
