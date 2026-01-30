let originalObj = {
    name: 'sachin',
    address: {city: 'khandwa'}
}

// we can make shallow copy using
// 1. Object.assign
// 2. spread operator
// 3. JSON.parse(JSON.stringify(originalObj))
// 4. Object.create

// shallow copy -> original object me change kroge to shallow copy me bhi change hoga beacuse the copy is not deep, and the memory ref is same


// let shallowCopy = Object.assign({}, originalObj);
let shallowCopy = {...originalObj}
let deepCopy = JSON.parse(JSON.stringify(originalObj));

originalObj.address.city = 'indore'

// console.log(shallowCopy);

// deep copy -> original object me change kroge to deep copy me bhi change nhi hoga beacuse the copy is deep, and it is memory ref is different

console.log(shallowCopy.address);
console.log(deepCopy.address);
