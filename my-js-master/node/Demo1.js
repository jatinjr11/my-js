console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

Promise.resolve().then(() => {
  console.log("C");
});

process.nextTick(() => {
  console.log("D");
});

console.log("E");
