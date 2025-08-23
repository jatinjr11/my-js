const originalObj = {
    name: "Sachin",
    age: 20,
    city: "Indore"
}

console.log(originalObj)

// Method 1: Spread Operator (shallow copy)
const copiedObjSpread = { ...originalObj }
originalObj.city = "Mumbai"

console.log(originalObj)

console.log(copiedObjSpread)

// Method 2: Object.assign (shallow copy)
// parameters: target, source
const copiedObjAssign = Object.assign({}, originalObj)

// Method 3: JSON.parse(JSON.stringify(obj)) (deep copy)
const copiedObjDeep = JSON.parse(JSON.stringify(originalObj))
console.log(copiedObjDeep)