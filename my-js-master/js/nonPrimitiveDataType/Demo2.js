let arr = [1, 2, 3];
// arr.push(4);
// arr.pop();
// arr.shift();     // remove first element
// arr.unshift(0); // add element at first
arr.push(4);
arr.push(5);
arr.push(6);
arr.push(7);
arr.push(8);

// console.log(arr)
// console.log(arr.slice(2,4));

/*
let arr2 = [10,20,30];

let ansArray = arr2.map(function(number, index){
    return number*2;
});

// console.log(ansArray);

let arr3 = [10,20,55,34,50];
ansArray =  arr3.filter(function(num) {
    return num % 2 === 0;
})

console.log(ansArray)

let arr4 = [1, 2, 'sachin', null, 92.4, 'kumar'];
let ans = arr4.filter(function (num) {
    if (typeof (num) === 'number') {
        return true;
    } else {
        return false;
}
});

console.log(ans);

let arr4 = [1, 4, 2, 5, 7];

// console.log(arr4.sort().reverse());
// console.log(arr4.indexOf(3))
// console.log(arr4.indexOf(5))

arr4.forEach((val, index) => {
    console.log("Number: ", val, " Index: ", index);
})
*/

let obj = {
    name: "Sachin",
    age: 24,    
    greet: function(){
        console.log("Hello")
    }
}

for (const key in obj) {
   console.log(key,":", obj[key])
}