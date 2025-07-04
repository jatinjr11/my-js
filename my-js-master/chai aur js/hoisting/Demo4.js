var name = "Global";

function hoistingExample() {
    console.log(name); // undefined (not "Global")
    console.log(age);  // undefined
    
    var name = "Local";
    var age = 25;
    
    console.log(name); // "Local"
    console.log(age);  // 25
}

hoistingExample();

/*
// How JavaScript interprets it:
function hoistingExample() {
    var name; // Hoisted declaration
    var age;  // Hoisted declaration
    
    console.log(name); // undefined
    console.log(age);  // undefined
    
    name = "Local"; // Assignment
    age = 25;       // Assignment
    
    console.log(name); // "Local"
    console.log(age);  // 25
}
*/