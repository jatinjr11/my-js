for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // Output: 3, 3, 3
  }
  // Fix: Use `let` (block-scoped) instead.