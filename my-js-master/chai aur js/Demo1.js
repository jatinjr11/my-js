function loginUserMessage(username = "sita") {
    // if(username === undefined)
    if(!username)
    {
        console.log("Please enter a username");
        return
        // return
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage(12));
// console.log(loginUserMessage());


/*
document.constructor.name
'HTMLDocument'
Window.constructor.name
'Function'
window.constructor.name
'Window'
*/


// rest operator or spreadd operator
function calculateCartPrice(val1, val2,...num1) {
    return num1;
}

console.log(calculateCartPrice(200,100,300,500,600));


const user = {
    username: "Ram",
    // price: 199
    prices: 199
};

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sita",
    price: 210
});


const myNewArray = [100,200,300];

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([10,20,30,40,50]));

