const promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Promise resolved successfully");
    } else {
        reject("Promise rejected");
    }
});

promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("Done");
    });
