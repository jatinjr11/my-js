// async function greet() {
//   return "Hello";
// }

// greet().then((msg) => console.log(msg)); // Output: Hello

// console.log(greet());
// console.log(greet());


// -------------------
// https://jsonplaceholder.typicode.com/posts

async function myFunc() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log("data mil gaya", data);
  } catch (error) {
    console.log("Error: ", error);
  }
}

myFunc();
