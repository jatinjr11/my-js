// const tinderUser = new Object(); -> singleton obj...
// const tinderUser = {} -> non singleton obj...

const tinderUser = {};

tinderUser.id = "abc101";
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        username: {
            firstName: "Sachin",
            lastName: "Kumar"
        }
    }
}

// console.log(regularUser.fullname.username.lastName)

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = Object.assign({}, obj1, obj2); // less use

const obj3 = {...obj1, ...obj2}; // more use
// console.log(obj3)

const users = [
    {},
    {},
    {},
    {}
]

// users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))

console.log(tinderUser.hasOwnProperty("mobile no."))