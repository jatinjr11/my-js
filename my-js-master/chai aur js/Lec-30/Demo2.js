const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
// ye automatic return krta h
// const newNums = myNumers.map( (num) =>  num + 10)

const newNums = myNumers.map( (num) => { return num + 10})

console.log(newNums);
*/

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)
console.log(newNums);
