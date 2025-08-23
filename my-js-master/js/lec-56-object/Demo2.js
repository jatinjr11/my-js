const person = {
    name: "Sachin",
    age: 20,
    gender: "Male"
};

for (let key in person) {
    console.log(key,":", person[key]);
}