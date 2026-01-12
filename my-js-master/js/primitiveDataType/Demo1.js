
/*

-> Primitive data types store a single simple value
-> They are immutable (cannot be changed directly)

Type	         Example
Number	  ->     10, 3.14
String	  ->     "hello"
Boolean	  ->     true, false
Undefined ->      x;
Null	  ->     let y = null;
BigInt	  ->     123n
Symbol	  ->     Symbol("id")



*/

let str = "hello";
str[0] = "K"; // ❌ Fails silently (strings are immutable)
console.log(str); // "hello" (unchanged)