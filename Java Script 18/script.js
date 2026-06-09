// // Synchronous Code

// let firstPromise = new Promise( (resolve , reject )=>{
//     console.log("Abhinav");
//     resolve(100);
// } );

// let secondPromise = new Promise( (resolve , reject )=>{
//     console.log("Abhinav");
//     reject(new Error("Internal Server Error"));
// } );


// // Asynchronous Code

// let promise1 = new Promise( (resolve, reject) => {
//     setTimeout( function sayMyName(){
//         console.log("Abhinav Raparthi");
//     }, 5000);
//     resolve(100);
// });


let promise2 = new Promise( (resolve,reject) => {
    let status = false;
    if (status){
        resolve(101);
    }
    else{
        reject(new Error("Status Not True"));
    }
});

promise2.then((message) => {
    console.log("Then ka message: " + message);
}).catch((error)=>{
    console.log("error ka msg: "+error);
} );