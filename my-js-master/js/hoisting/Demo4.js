var name = "Global";

function demo1() {
    console.log(name); // undefined (not "Global")
    console.log(age);  // undefined
    
    var name = "Local";
    var age = 25;
    
    console.log(name); // "Local"
    console.log(age);  // 25
}

demo1();
