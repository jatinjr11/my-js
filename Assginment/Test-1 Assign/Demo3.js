// 3. The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.

//  const input = "George Raymond Richard Martin";
//  output :- "GRRM";

const input = "George Raymond Richard Martin";

const inist = input.split(' ').map((ele) => ele[0]).join('');
console.log(inist);
