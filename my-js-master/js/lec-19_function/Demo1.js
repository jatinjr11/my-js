
function sayMyName() {
    console.log("S");
    console.log("a");
    console.log("c");
    console.log("h");
    console.log("i");
    console.log("n");
}

// sayMyName // ref
// sayMyName()  

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// parameters
function addTwoNumbers(number1, number2) {

    // let result = number1 + number2
    // return result
    return number1 + number2
    // console.log();
}

// addTwoNumbers();
// arguments
// addTwoNumbers(2,4);
// addTwoNumbers(2,"4"); // 24
// addTwoNumbers(2, "a"); // 2a

// const result = addTwoNumbers(3, 5)
const result = addTwoNumbers(3, "?")

console.log("Result: ", result);


// function loginUserMessage(){
function loginUserMessage(username) {
    // function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("PLease enter a username");
        // return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("sachin"))
// console.log(loginUserMessage()) // undefined
// console.log(loginUserMessage()) // "sam"

// ---------------------part 2--------------------------------

// Rest operator or spread operator
function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));