let str = "hello";
str[0] = "H"; // ❌ Fails silently (strings are immutable)
console.log(str); // "hello" (unchanged)