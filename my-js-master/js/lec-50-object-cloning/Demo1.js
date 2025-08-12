

/*
let obj = {
    age: 18,
    wt: 62
}
console.log(obj)
obj.color = "blue";
console.log(obj)
*/

let src = {
    age: 12,
    wt: 66
}

// let dest = {...src};
let dest = src;
src.age = 99;

console.log("src: ", src)
console.log("dest: ", dest)