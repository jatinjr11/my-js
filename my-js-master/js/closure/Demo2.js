function secretPassword() {
    let password = "12345";  // private
    return {
        get: () => password,
        set: (newPass) => { password = newPass }
    }
}

const passManager = secretPassword();
console.log(passManager.get());  // 12345
passManager.set("abcd");
console.log(passManager.get());  // abcd


/*
-> Event handlers (functions tied to state at creation time)
-> Functional programming (currying, partial application)
-> Memoization / caching
*/