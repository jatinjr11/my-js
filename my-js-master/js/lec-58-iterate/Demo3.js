// forEach
const coding = ["js", "cpp", "java", "py", "html"];

/*
coding.forEach(function(item) {
    console.log(item)
})
*/

/*
coding.forEach((item,index,arr) => {
    console.log(item, index, arr)
})
*/

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName)
})