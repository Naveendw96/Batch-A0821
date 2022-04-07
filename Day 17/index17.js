// var imVar = "hello var";
// let imLet = "hello let";   //ES6

// var message = "global scope";

// function greet(){
//     var message = "local scope";
//     console.log(message);
// }
// greet();
// console.log(message);

// var message = "global scope";

// function greet(){
//     message = "local scope";
//     console.log(message);
// }
// greet();
// console.log(message);

//-----VAR-----

// var nu = 10;
// console.log(nu);

// if (nu===10){
//     var nu=20;
//     console.log(nu);
// }
// console.log(nu);


// //-----LET-----

// let num1 = 10;
// console.log(num1);

// if (num1===10){
//     let num1=20;
//     console.log(num1);
// }
// console.log(num1);
// for let, value declared inside the block is not available outside the block

// const messa = "Hello JavaScript";
// console.log(messa);
// messa  = "hi";
// console.log(messa);

// function say(mes=2){
//     console.log(mes);
// }
// say(6);

// const array1 = [1, 3, 5, 7, 9];
// const array2 = [...array1,10, 12]; // (...) - spread operator
// console.log(array2);

//Template Literals

let simplestring = "This is a simple string";
let templit = `This is a 
 template literal`;
// console.log(simplestring);
// console.log(templit);

// console.log("normal string = " + simplestring);
// console.log("normal " + simplestring + " string = " );

// console.log(`template ${templit} literals`);   //ES6

// console.log("the normal lang is "JavaScript" "); not working

// console.log('the normal lang is "JavaScript" ');
// console.log(`the normal lang is "JavaScript" `);