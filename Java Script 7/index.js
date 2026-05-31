// Variable(var) /function hoisting and Function calls
// Hositing is possible for functions and variables using var, it doesn't work on classes and objects

// // Variable Hoisting
// console.log(age);
// var age = 25;

// // Function Hoisting
// sayMyName('Abhinav');
// function sayMyName(finalName) {
//     console.log(finalName);
// }


// // function - first class citizen
// because-
// assign to variable
// pass as an argument
// return the function
// use func in DS (we can create an array of functions)
// as a property in class

// let greet = function(Name) {
//     console.log(Name);
// }
// greet("abhinav");

// function greetMe(greet,Name) {
//     console.log("welcome", Name);
//     greet();
// }
// function greet() {
//     console.log('Greetings for the day!');
// }
// greetMe(greet,'Abhinav');

// function solve(num) {
//     return function(num) {
//         console.log(num*num) 
//     }
// }
// ans = solve(5);
// ans(10);

// const arr = [
//     function(a,b) {
//         return a+b;
//     },
//     function(a,b) {
//         return a-b;
//     },
//     function(a,b) {
//         return a*b;
//     },
//     function(a,b) {
//         return a/b;
//     }
// ]
// let first = arr[0]
// console.log(first(2,3))

let obj = {
    age: 20,
    wt: 60,
    ht: 160,
    greet: ()=> {
        console.log('Hello World!');
    }
}
console.log(obj.age);
obj.greet();