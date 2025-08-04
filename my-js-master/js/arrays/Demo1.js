/*
var arr1 = [10,20,30,40,50]
console.log(arr1);  
console.log(arr1.includes(40));
console.log(arr1.indexOf(9));
console.log(arr1.indexOf(20));

const arr2 = arr1.join();
console.log(arr1);
console.log(typeof arr2);
console.log(arr2);


const arr3 = arr1.slice(0,2);
console.log(arr3);

*/

















// ++++++++++++++++ Arrays 2 ++++++++++++++++++++++++++++++=

// concatenation

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);
// marvel_heros.push("indore");

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeroes = marvel_heros.concat(dc_heros);
// console.log(allHeroes);

// spread operator
const all_new_heroes = [...marvel_heros, ...dc_heros];
console.log(all_new_heroes);




