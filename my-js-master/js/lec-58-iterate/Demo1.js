// for of
["", "", ""]
[{}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6];

/*
for (const val of arr) {
    console.log(val);
}
*/

/*
const greetings = "Hello World";
for (const greet of greetings) {
    if (greet === ' ') continue;
    console.log(`Each Char is ${greet} `);
}
*/

const map = new Map();
map.set("IN", "India");
map.set("UK", "United Kingdom");
map.set("CH", "China");

// console.log(map)
// for (const val of map) {
//     console.log(val)
// }

// for (const [key, value] of map) {
//     console.log(`Key is ${key} and value is ${value}`);
// }

const myObject = {
    game1: "NFS",
    game2: "BGMI"
}
/*
for (const [key, val] of myObject) {
    console.log(`${key} ${val}`)
}
// for of -> object me nahi chalega
*/

