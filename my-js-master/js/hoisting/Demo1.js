function demo() {
    x = 10; // ❌ Without declaration, `x` becomes global!
  }
  demo();
  console.log(x); // 10 (leaked to global scope)