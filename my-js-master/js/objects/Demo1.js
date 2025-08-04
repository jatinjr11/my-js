// two ways to declare object -> 1.Literal, 2.Constructor

// singleton -> literal se declare krenge to singleton nhi bnega or constructor se bnayege to singlton obj bnega
// Object.create


// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Jos",
    "full name": "jos Bucket",
    [mySym]: "mykey1", // symbol ko use krne ka trika 
    age: 18,
    location: "Jaipur",
    email: "jos@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.full name);
// console.log(JsUser."full name");
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "elon@gmail.com";
// Object.freeze(JsUser);
JsUser.email = "Jeff@gmail.com";
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function () {
    // same object ko ref krna h to this likhenge 
    console.log(`Hello JS user, ${this.name}`);
    //    console.log(`Hello JS user, ${name}`);
}

// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
// JsUser.greeting();
// JsUser.greetingTwo();
// console.log(JsUser);

