// stack (primitive) &  Heap (Non-Primitive)

// stack me aapko copy hi milta hai
let myYtName = "IndoreYT";
let anotherName = myYtName;
anotherName = "indore";
// console.log(myYtName);
// console.log(anotherName);


// Heap
// heap me ref milta h
let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo  = userOne;
userTwo.email = "Elon@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
