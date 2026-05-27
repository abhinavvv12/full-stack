// Variables
// name = "Abhinav";
// age = 20;
// // price = 99.99;
// x = null;
// y = undefined;
// isfollow = false;
// totalPrice = 1000;
// console.log(isfollow);


// It is a dynamically typed Languge


// let, const &var

// let fullname = "abhinav";
// // let age = 20;
// let price;
// let a;
// console.log(fullname);

// const - cannot be redeclared
// var - can be redeclared(not used prominently)
// let - mostly used variable (can be declared again)



// local variables
// {
//     let a = 15;
//     console.log(a);
// }

// {
//     let a = 10;
//     console.log(10);
// }




// data types in JS //
// primitive-7 & Non-primitive Objects

// Primitive data types

// Number
// String
// Boolean
// Undefined
// Null
// BigInt
// Symbol

// let myAge = 20;
// typeof myAge;  // prints the type of data

// let x = BigInt("123456789");
// let y = Symbol("Hello World!");




// Non Primitive data types:

// Objects - Collection of Values
// key : value (stoed in this way)

const Student = {
    fullName : "Abhinav",
    age : 20,
    cgpa : 8.5,
    isPass : true
};

console.log(Student)
// student["fullName"]

console.log(Student["age"])
console.log(Student.age);

let a = 10;
a = 5


Student["age"] = Student["age"] + 1;
console.log(Student["age"]);