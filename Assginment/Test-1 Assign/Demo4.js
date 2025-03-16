/*
4. Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
 
output:- [13, 67, 54];

*/

const input = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jennifer",
      age: 65,
    },
  ];

const ages = input.map(person => person.age);
const oldest = Math.max(...ages)
const youngest = Math.min(...ages)
const diff = oldest - youngest;

console.log(`[${youngest}, ${oldest}, ${diff}]`);
console.log([youngest, oldest, diff]);








// console.log(ages);
// console.log(oldest);
// console.log(youngest);