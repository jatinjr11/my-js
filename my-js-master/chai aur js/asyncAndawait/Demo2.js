async function greet() {
  return "Hello";
}

greet().then((msg) => console.log(msg)); // Output: Hello

console.log(greet());
console.log(greet());
