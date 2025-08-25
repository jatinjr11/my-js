const user = {
    username: "Jos",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage();
// user.username = "sachin"
// user.welcomeMessage();

// console.log(this) // in global scope and in node this keyword refers to the empty object

/*
function demo(){
    let username = "sachin"
    // console.log(this)
    console.log(this.username)
}

demo()
*/

const chai = () => {
    let username = "Sachin"
    // console.log(this.username);
    console.log(this)
}

// chai();

const addTwo = (num1, num2) => {
    return num1 + num2;
}

// console.log(addTwo(4,6))

// implicit return
// const addThree = (num1, num2) => num1 + num2;
const addThree = (num1, num2) => (num1 + num2);

// console.log(addThree(2,4))

const obj = () => ({name: "sachin"});
console.log(obj())
/*
{} curly braces lika to return keyword likhna pdega
() paranthesis likha to reutn nhi likhna h
*/