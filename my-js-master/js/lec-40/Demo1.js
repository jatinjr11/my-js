/*
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})
*/

/*
const promiseThree = new Promise(function(resolve,reject) {
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})
*/

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({username: "Jake", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then((user)=> {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error)=>{
    console.log(error);
})