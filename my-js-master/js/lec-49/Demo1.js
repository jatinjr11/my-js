function counter() {
    let count = 0; // Private variable
  
    return {
      increment: function () {
        count++;
        return count;
      },
      decrement: function () {
        count--;
        return count;
      }
    };
  }
  
  const myCounter = counter(); // Create a new instance of the counter
  console.log(myCounter.increment()); // Output: 1
  console.log(myCounter.increment()); // Output: 2
  console.log(myCounter.decrement()); // Output: 1
  console.log(counter().increment()); // Output: 1
  counter().count = 5; // This won't affect the private count variable
  console.log(counter().increment()); // Output: 1

    // The private variable 'count' is not accessible from outside the closure
    // console.log(myCounter.count); // This will throw an error
    function add(){
        var a = 10;
        let b = 20;
        // return a + b;
    }

    console.log("addter");
    
    // add().a = 50;
    // console.log(add().a); // Output: undefined

    let a = undefined;
    console.log(a);
    a = 10;
    console.log(a);