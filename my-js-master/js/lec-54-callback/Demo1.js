function add(x, y) {
    return x + y;
}

let a = 5
let b = 3;

function display(x, y, operation) {
    let result = operation(x, y);
    console.log(result);
};

display(a, b, add);
