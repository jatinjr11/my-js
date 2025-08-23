// default parameters : allows you to specify a default value for a function parameter if no value or undefined is passed.
function greet(name = "Default Name"){
    console.log("Hello,",name )
}

// greet() // Hello, Default Name
// greet(undefined) // Hello, Default Name
greet("Sachin") // Hello, Sachin