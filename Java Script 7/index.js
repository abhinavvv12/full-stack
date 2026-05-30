// Variable(var) /function hoisting and Function calls
// Hositing is possible for functions and variables using var, it doesn't work on classes and objects

// Variable Hoisting
console.log(age);
var age = 25;

// Function Hoisting
sayMyName('Abhinav');
function sayMyName(finalName) {
    console.log(finalName);
}
