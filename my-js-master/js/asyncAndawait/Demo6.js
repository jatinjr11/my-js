async function getData() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let res = await data.json();
    return res;
}

// using promise
// getData().then(res => console.log(res)).catch(err => console.log(err));

// using async await
async function showData() {
    try {
        let res = await getData();
        console.log("Response Data: ",res);
    } catch (err) {
        console.log(err);
    }
}
showData();