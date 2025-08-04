// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data loaded");
//     }, 1000);
//   });
// }

// async function main() {
//   console.log("Start");
//   const result = await fetchData();
//   console.log(result);
//   console.log("End");
// }

// main();

console.log("1");

async function test() {
  console.log("2");
  await Promise.resolve();
  console.log("3");
}

test();
console.log("4");
