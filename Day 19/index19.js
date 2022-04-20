console.log("Class ES6")
/*
//---Array Destructuring--- // Access array elements

const arr = [1,2,3,4];
console.log(arr[2])

const [apple, mango, banana] = arr  // ES6 destructuring
console.log(apple)

function getscore(){
    return [90,100];
}

var [x,y,z] = getscore();

console.log(x);         //90
console.log(y);         //100
console.log(z);         //undefined

//---Object Destructuring--- // Access object elements

const obj = {
    name: "Naveen Dasitha",
    email:"abc@gmail.com",
    age:27
}
console.log(obj.name);
console.log(obj.email);

let {name, email, age, dum} = obj;   //ES6 Should give exact name as the object (key name should equal to variable name)
console.log(email);

let person = {
    firstname: "Naveen ",
    lastname:"Weththasinghe",
    age1:27,
    middlename:"Dasitha"
}
let {firstname, lastname, age1, middlename = ""} = person;
console.log(firstname);
console.log(lastname);
console.log(age1);
console.log(middlename);

*/

//------ES6 Arrow Fuctions-----------------

// function add(x,y){
//     return x+y;         // Traditional way
// }

// let add = function(x,y){
//     console.log(x);
//     return x+y;
// }
/*
let add = (x,y) => {console.log(x); return (x+y)};         //Arrow fuction
console.log(add(10,20));



const counter = {
    count: 2,
    next: function(){
        return (this.count)*100;
    }
}
console.log(counter.next());
*/

let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
}
console.log(sum)