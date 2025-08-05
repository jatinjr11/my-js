function performOperation(data, callback) {
    // Simulate an asynchronous operation
    setTimeout(() => {
      const processedData = data.toUpperCase();
      callback(processedData); // Execute the callback with the result
    }, 1000);
  }
  
  function displayResult(result) {
    console.log("Result:", result);
  }
  
  performOperation("hello world", displayResult); 
  // Output after 1 second: Result: HELLO WORLD

  console.log("endddddddd");
  console.log("endddddddd");
  