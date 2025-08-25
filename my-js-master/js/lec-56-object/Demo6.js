// object destructuring
const course = {
    courseName: "JS",
    price: "999",
    courseInstructor: "Sachin"
};

const {courseInstructor: instructor} = course;

// console.log(courseInstructor); error is not defined
console.log(instructor);