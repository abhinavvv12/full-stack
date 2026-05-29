// // Objectssssssssssssssss

// const { useReducer } = require("react")

let obj = {
    name : "Abhinav",
    age : 20,
    weight: 60,
    height : "5.5ft",    
    "full name" : "Abhinav Jimmy",
    greet: function(){
        console.log("hello ji kaise ho saare");
    }
};
// console.log(obj)
// obj.greet();
// console.log(typeof(obj))

// let obj2 = obj;










// Arraysssssssssssssssssssss

// let arr = [1,2,3,4,5];
// console.log(arr);


// // Built in methods
// Push - insert at end 
// pop -remove end element
// shift - remove left most element 
// slice - arr.push(20);
// arr.slice(1,2);
// splice - contrnt change in arr for index of itself
 // map 
// filter 
// reduce 
// sort 
// indexof 
// find 



let arr = new Array(['abhi',true,56,'jimmy',90]);

// console.log(arr);
// arr.push('abhinav');
// arr.shift();
// arr.unshift('abhi');
// arr.splice(1,2,'jimmy')
// arr.splice(1,0,'jimmy')

let brr = [10,20,30,40,11,21,34];

// let ansArray = brr.map((number) => {
//     return number*number;})
// let ans = brr.map((number, index) => {
//     console.log(number);
//     console.log(index);
// })
// console.log(ansArray);
// console.log(ans);

// let ans = brr.filter((number) => {
//     if(number%2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(ans)

// let ans = arr.filter((value) => {
//     if(typeof(value) === 'number') {
//         return true;
//     }
//     else {
//         return false;
//     }
// });
// console.log(ans)

// let ans = brr.reduce((acc,curr) =>{
//     return acc + curr;
// },0);
// console.log(ans);

// let ans = brr.sort();
// brr.reverse();
// console.log(ans);

// console.log(brr.indexOf(30));

// let ans = brr.forEach((value, index) => {
//     console.log("Number: ",value, " ","Index: ",index);
// });
// console.log(ans)

// for(let key in obj) {
//     console.log(key, " ", obj[key]);
// }

// for(let value of brr){
//     console.log(value);
// }

// let fullname = 'abhinavvvv';
// for(let val of fullname){
//     console.log(val);
// }


// function getSum(brr){
//     let sum = 0;
//     brr.forEach(element => {
//         sum = sum + element
//     });
//     return sum
//     // let len = brr.length;
//     // let sum = 0;
//     // for(let ind = 0;ind<len;ind++){
//     //     sum = sum + brr[ind]
//     // }
//     // return sum;
// }

// let totalSum = getSum(brr);
// console.log(totalSum);




