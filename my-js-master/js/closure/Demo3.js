

// Data Encapsulation / Privacy 

function counter() {
    let count = 0;

    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        }
    };
}

const c = counter();
console.log("C: ", c)
console.log(c.increment());
console.log(c.increment());