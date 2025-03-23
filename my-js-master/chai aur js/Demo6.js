// closure -> is a combination of funcation and req. data or lexical scope or surrounding state 

// let name  = "Shyam"
function outerFunction(){
    let name = "Ram";  // let -> block scope

    function innerFunction(){ 
        // let name = "Sita";
        console.log(name);
    }

    // innerFunction();
    return innerFunction;
}

// outerFunction();
let inner = outerFunction();
console.log(inner);

// innerFunction jo h wo req data ke se sath bind ho gya h
// name ka jo ref h wo innerfunction ke sath bind kr diya gya h

// Encapsulation ke liye use hota h