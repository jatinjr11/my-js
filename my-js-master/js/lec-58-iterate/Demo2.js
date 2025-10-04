// forin
const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "Ruby"
}

for (const key in myObject) {
    // console.log(key)
    // console.log(myObject[key])
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js", "cpp", "java", "py", "html"]
for (const key in programming) {
    console.log(key)
    // console.log(programming[key])
}