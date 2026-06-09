// let name = "Jimmy";
// function outerFunction() {
//     {
//         let name = "Sushant";
//         console.log(name);
//     }
//     let name = "Abhinav";
//     function innerFunction() {
//         let name = "Raparthi";
//         console.log(name);
//     }
//     innerFunction();
// }
// outerFunction();



// CLOSURES
function outerFunction() {
    name = 'abhinav';
    function innerFunction() {
        console.log(name);
    }
    return innerFunction;
}
let inner = outerFunction();
inner();