/*
function ShowString(){
    console.log("This fuction is called");
    return "shapeAI"
}
console.log(ShowString());

function printName(name){
    console.log("My name is ",name);
}
printName("Naveen");
*/
//naveen - argument
//name - parameter

//-------Array predefined functions--------- 
/*
var colors = ["r", 1, 2, "b", "B","R","white"];
colors.push("a");    //add elements to the end of array
console.log(colors); 

colors.unshift("f");    //add elements to the beginning of array
console.log(colors);

colors.pop();  //remove last element of the array
console.log(colors);

colors.shift();   //remove first element of the array
console.log(colors);

console.log(colors.join(" - "));

console.log(colors.indexOf("R"));

colors.sort();  //sorting based on ASCII values
console.log(colors);

colors.reverse();
console.log(colors);

var newcolors = colors.slice(1,3);
console.log(newcolors);
*/
/*
var age = [1,2,3,4,5];
var f = age.find(myFunc);
function myFunc(value, index, array){
    return index > 2;
}
console.log(f);

age.forEach(function (e){
    console.log(e * 5)
});

for(var e of age){
    console.log(e * 6);
}
*/

//-------Object predefined functions--------- 
/*
var obj = {65:"A", 66:"B", 67:"C"};
console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

var objk = {
    pr1:42
};

console.log(objk.hasOwnProperty("pr1"));
console.log(objk.hasOwnProperty("pr2"));

var obje = {
    name:"JS"
};

var freezedobj = Object.freeze(obje);
console.log(obje);
console.log("check", freezedobj === obje);
console.log(Object.isFrozen(obje));
// freeze means it's constant,fixed and immutable. only read or print. can't change.

var obj = {65:"A", 66:"B", 67:"C"};
obj.foo = "bar1";
console.log(obj.foo);
obj.new_foo = "bar2";
console.log(obj.new_foo);
console.log(obj);
*/
