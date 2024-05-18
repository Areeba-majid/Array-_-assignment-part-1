"use strict";
// Areeba 
// 15/may/2024
Object.defineProperty(exports, "__esModule", { value: true });
let product1 = [{
        name: "Tshirt",
        price: 500,
        inventory: {
            stock: 15,
            coloroptions: ["black", "lylac", "brown", "pestal green"]
        }
    }, {
        name: "shoes",
        price: 2000,
        inventory: {
            stock: 12,
            coloroptions: ["black", "blue", "white"]
        }
    }, {
        name: "watche",
        price: 5000,
        inventory: {
            stock: 20,
            coloroptions: ["silver", "black", "brown"]
        }
    }];
// working if the there is a requirment of a different color then what addition things should we have to add in the object
function changeColor(product1, newColor) {
    product1.inventory.coloroptions.push(newColor);
    if (newColor === "Black") {
        product1.price += product1.price * 0.15;
    }
    else if (newColor === "Red") {
        product1.price -= product1.price * 0.05;
    }
    else if (newColor === "Blue") {
        product1.price += product1.price * 0.95;
    }
    else if (newColor === "Silver") {
        product1.price -= product1.price * 0.10;
    }
    else {
        console.log(`Sorry! this ${newColor} is not available `);
    }
    ;
}
;
console.log(product1);
/*    Part 2: Multi-Dimensional Arrays and Tuples - Student Grades

Challenge:

You are tasked with creating a student grading system. Implement functions and logic to
manage student grades effectively.

1. Define a TypeScript type alias named Student to represent a student with the
following properties:
• name (string): The name of the student.
• grades (number[ ]): An array of grades for different subjects.

2. Create an array named students containing at least three student objects. Each student
object should include a name and an array of grades.

3. Implement a function named calculateAverageGrade that takes a student's grades as
input and returns the average grade for that student.

4. Display each student's name and average grade. Iterate through the students array,
calculate the average grade for each student using the calculateAverageGrade
function, and print their name and average grade
*/
console.log("\n 02  STUDEND GRADE \n ");
let Students = [
    {
        name: "areeba",
        grade: [60, 90, 100]
    }, {
        name: "zaeema",
        grade: [40, 50, 80]
    }, {
        name: "rameen",
        grade: [50, 60, 80]
    }
];
function calculateAverageGrade(students) {
    const totalGrades = students.grade.reduce((sum, grade) => sum + grade, 0);
    return totalGrades / students.grade.length;
}
//// displaying each student name and grade
Students.forEach((Students) => {
    let averageGrade = calculateAverageGrade(Students);
    console.log(`${Students.name}
    average Grade = ${averageGrade}`);
});
/*
Part 3: Array with Types and Indexing - Employee Salaries

Challenge:

You are managing employee salaries for a company. Implement logic to calculate salaries and
handle bonuses.

1. Define a type alias named Employee with the following properties:
• name (string): The name of the employee.
• hoursWorked (number): The number of hours the employee worked.
• hourlyRate (number): The hourly rate of the employee.
• salary (number): The base salary of the employee.

2. Define an array named employees containing employee objects. Each employee
object should include a name, hoursWorked, hourlyRate, and salary.

3. Implement a function named calculateSalary that calculates the salary for each
employee based on the hours worked and hourly rate.

4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary

*/
console.log("\n  part 3 \n ");
//step 02: Define an array named employees containing employee objects
let employees = [
    { name: "Areeba ", hoursWorked: 22, hourlyRate: 120, salary: 0 },
    { name: "Humaira", hoursWorked: 14, hourlyRate: 50, salary: 0 },
    { name: "Madiha", hoursWorked: 18, hourlyRate: 50, salary: 0 }
];
// Calculate Salary
function calculateSalary(employees) {
    let basicSalary = employees.hoursWorked * employees.hourlyRate;
    // WOW BONUS 
    if (employees.hoursWorked >= 20) {
        //10% Bonus
        basicSalary += basicSalary * 0.10;
        console.log(`Bonus is Given`);
    }
    employees.salary = basicSalary;
    return basicSalary;
}
// Calculate the salary for each employee in the array
for (let emp of employees) {
    calculateSalary(emp);
}
//Result
for (let emp of employees) {
    console.log(`Employee: ${emp.name}, salary: ${emp.salary.toFixed(2)}`);
}
