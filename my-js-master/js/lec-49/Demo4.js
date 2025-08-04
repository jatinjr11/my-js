for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
      console.log(i); // What does this log?
    }, 1000);
  }
  // Output after 1 second: 4, 4, 4 (not 1, 2, 3)