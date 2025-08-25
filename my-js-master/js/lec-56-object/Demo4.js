// singleton onjects means -> with creating of constructor, we can create only one object of that class
// Object.create()

// objects literals
const JsUser = {
    name: "Sachin",
    age: 20,
    location: "indore",
    email: "sachin@gmail.com",
    isLogged: false,
    lastLoginDays: ["Monday", "Saturday"],
    "full address": "Indore, MP, India"
}
/*
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full address"])

JsUser.email = "sachin123@gooogle.com"
Object.freeze(JsUser) // we can not add any new property in this object
JsUser.email = "sachin123@microsoft.com"
console.log(JsUser)
*/

JsUser.greeting = function(){
    console.log("Hello JS User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User 2 ${this.name}`)
}

// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());