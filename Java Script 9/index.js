// // classes && Default parameters in function 

// class Human {
//     //properties
//     age = 14; //public
//     #wt = 50; //private
//     ht = 156;
//     name = 'Jimmy';

//     constructor(newAge, newHeight, newWeight) {
//         this.age = newAge;
//         this.ht = newHeight;
//         this.#wt = newWeight;
//     }

//     //bheviour
//     sitting() {
//         console.log("I am Sitting", this.#wt);
//     }

//     Study() {
//         console.log("I am Studying");
//     }

//     #Play() {  //private
//         console.log(" I am Playijng");
//     }

//     // Getter
//     get fetchWeight() {
//         console.log(this.#wt);
//     }

//     // Setter
//     set modifyWt(val) {
//         this.#wt = val;
//     }
// }

// let obj = new Human(60,190);
// console.log(obj.ht)

// console.log(obj.age);
// obj.sitting();
// obj.fetchWeight;



// // Default Parameters

// function sayName(myName = "Jimmy") {
//     console.log("My Name is:",myName)
// }
// sayName();