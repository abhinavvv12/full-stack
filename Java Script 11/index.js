// // Objects are Dynamic in Nature
// let obj = {
//     age: 12,
//     wt: 90,
//     ht: 180
// }
// console.log(obj);
// obj.color = "white";
// console.log(obj);

// Object Cloning(a = b is not cloning)

// let src = {
//     age: 12,
//     wt: 90,
//     ht: 180
// }
// let dest = src; // this is copying
// let dest = {...src}; //this is cloning (spread operator)
// let dest = Object.assign({},src); //this is also cloning(assign method)
// let dest = {};
// for(let key in src) {
//     let newKey = key;
//     let newValue = src[key];
//     // insert newkey and value in dest and create a clone
//     dest[newKey] = newValue;
//     console.log(key);
// }
 
// dest.age = 90;
// console.log("src:",src);
// console.log("dest:",dest);



// Garbage Collector 

