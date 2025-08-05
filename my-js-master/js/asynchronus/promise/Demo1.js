const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
        const success = true; // Simulate success or failure
        if (success) {
            resolve("Data fetched successfully!"); // Resolve with a value
        } else {
            reject("Error: Failed to fetch data."); // Reject with an error
        }
    }, 2000);
});

myPromise
    .then((message) => {
        console.log(message); // Output: Data fetched successfully!
    })
    .catch((error) => {
        console.error(error); // Output: Error: Failed to fetch data.
    })
    .finally(() => {
        console.log("Promise operation completed.");
    });