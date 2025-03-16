

    // 10.
//  You are given an array of objects representing a collection of employees, each with a name, salary, and department. Your task is to use map, filter, and reduce to calculate the average salary for each department and then return an array of objects containing only the departments that have an average salary above 65000.

// input:- const employees = [
//   { name: "John", salary: 50000, department: "IT" },
//   { name: "Jane", salary: 60000, department: "HR" },
//   { name: "Bob", salary: 55000, department: "IT" },
//   { name: "Sophie", salary: 75000, department: "HR" },
//   { name: "Mike", salary: 65000, department: "IT" },
//   { name: "Emily", salary: 80000, department: "HR" },
//   { name: "David", salary: 70000, department: "IT" },
// ];



const employees = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
];

// Step 1: Group employees by department and calculate total salary & count
const departmentMap = employees.reduce((acc, employee) => {
  if (!acc[employee.department]) {
    acc[employee.department] = { total: 0, count: 0 };
  }
  acc[employee.department].total += employee.salary;
  acc[employee.department].count += 1;
  return acc;
}, {});

// Step 2: Calculate the average salary for each department
const departmentAverages = Object.entries(departmentMap).map(([department, data]) => ({
  department,
  average: data.total / data.count,
}));

// Step 3: Filter departments with an average salary above 65000
const result = departmentAverages.filter(dept => dept.average > 65000);

console.log(result);

