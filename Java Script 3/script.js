// Arithmetic Operators

// // Binary operator
// let a = 10;
// let b = 15;
// console.log(a+b);

// // Unary operator
// let c = 8;
// console.log(c++);
// console.log(c)

// // Ternary operator
// let age = 15;
// let status1 = (age>18) ? 'I can Vote' : 'I cannot vote';
// console.log(status1)


// // Logical Operator
// let ans = (true && true && true)
// let ans = (false || false || false)
// let ans = (true || false)
// console.log(ans);


// // falsy and truthy(anything which is not truthy is falsy)
// console.log(false||'Jimmy');
// console.log(false||7||11||18);
// console.log(true && null);


// // Bit-wise operator
// console.log(2&5);
// console.log(2|5);
// console.log(~(0));
// console.log(2^2^5);


// // left shift and right shift
// // x<<n means (left shift) = x*(2**n)
// // x>>n means (right shift) = x/(2**n)
// console.log(2>>1)
// console.log(2<<1)






// // Conditional Statements (if else and switch)
// let age  = 20;
// if (age>=18) {
//     console.log("can vote");
// }
// else {
//     console.log("cannot vote")
// }


// let number = 4;

// if (number == 1){
//     console.log('A')
// }
// else if (number == 2){
//     console.log('b')
// }
// else if (number == 3){
//     console.log('c')
// }
// else if (number == 4){
//     console.log('d')
//     if (age > 18){
//         console.log('I can Vote');
//     }
// }
// else if (number == 5){
//     console.log('e')
// }
// else{
//     console.log('F')
// }

let num = 3;

switch(num){
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    case 4: console.log('D');
    break;
    default : console.log('F');
}