function hof(func) {
    func();
}

hof(sayHello);

function sayHello() {
    console.log("Hello!")
}