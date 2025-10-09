const person = {
    name: 'sachin',
    greet: function () {
        console.log(`Hello ${name}`);
        // console.log(`Hello ${this.name}`);
    }
};

// console.log(person);
// person.greet();

/*
This in Method Context:
When a function is a method of an object and is called using dot notation (e.g., object.method()), this inside that method refers to the object itself.
*/

let a = 4

function show() {
    let a = 10;
    console.log(this.a);
}

show()
/*


n JavaScript, the this keyword refers to the object that is currently executing the function or method in which this is used. The value of this is determined dynamically based on how the function is called, rather than where it is defined.

Here's a breakdown of how this behaves in different contexts:
1. Global Context:
When this is used outside of any function or object, it refers to the global object. In a browser environment, this is typically the window object. In Node.js, it refers to the global object.

2. Function Context (Regular Functions):
In a regular function (not a method of an object), this typically refers to the global object in non-strict mode.
In strict mode ("use strict"), this in a regular function will be undefined.

3. Method Context:
When a function is a method of an object and is called using dot notation (e.g., object.method()), this inside that method refers to the object itself.

4. Constructor Functions:
When a function is used as a constructor with the new keyword (e.g., new MyObject()), this inside the constructor refers to the newly created instance of the object.

5. Event Handlers:
In an event handler function (e.g., in an addEventListener callback), this usually refers to the DOM element that triggered the event.

6. Explicit Binding (call, apply, bind):
The call(), apply(), and bind() methods allow you to explicitly set the value of this for a function call.
call() and apply() immediately invoke the function with a specified this value.
bind() returns a new function with this permanently bound to a specified value, allowing you to call it later.

7. Arrow Functions:
Arrow functions (=>) do not have their own this binding. Instead, they inherit this from their lexical (surrounding) scope. This means this inside an arrow function will be the same as this in the code where the arrow function was defined.
Understanding this is crucial for writing effective and predictable JavaScript code, especially when working with objects, classes, and event handling.

*/