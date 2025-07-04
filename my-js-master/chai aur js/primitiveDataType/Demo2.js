let a = 10;
let b = a; // `b` gets a copy of `a`'s value
a = 20;
console.log(b); // 10 (unchanged)
console.log(a); // 20