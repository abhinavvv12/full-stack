// Variable Scoping

// // Global Scope
// const age = 20;
// console.log(age);
// {
//     console.log(age);
// }
// if (true){
//     console.log(age);
// }
// for (let i=0; i<2; i++){
//     console.log(age);
// }
// function sayHello(){
//     console.log("Hi", age);
// }
// sayHello();


// // Function Scope
// function greet(){
//     var name = 'Jimmy';
//     console.log("Hello",name);
// }
// greet();
// console.log(name)


// // Block Scope - only var variable can be accessed in and out of block socpe .
// {
//     var age = 20;
// }
// console.log(age);



// Temporal dead zone
console.log(marks);
console.log("abhinav");
console.log('Jimmy');
console.log(marks);
let marks = 90;
console.log(marks);