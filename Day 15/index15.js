// Arithmatic Operators----

// +
// -
// *
// **
// /
// %
// ++
// --

//---Assignment Operators---

// =
// +=
// -=
// *=
// /=
// %=
// **=

//--Comparison Operators---

// ==
// ===

// var x = 20;
// var y = "20";

// console.log(x==y);
// //--check the data type as well (strick)--
// console.log(x===y);

// !=
// !==
// >
// <
// <=
// >=

//--Logical Operators--

// &&
// console.log(true && false);
// ||
// console.log(true || false);

//---if-else Statements---
/*
var x = 20;
var y = "20";

if (x===y){
    console.log("This is True");
}
else if (x>=y){
    console.log(typeof x);
    console.log(typeof y);
    console.log("First is False, I am True");
}
else {
    console.log(typeof x);
    console.log(typeof y);
    console.log("This is False");
}
*/
//---SWITCH Statements---
/*
var n1 = 50;
var n2 = 20;

var oper = "+";

switch (oper){
    case "+":
        console.log(n1+n2);
        break;
    case "-":
        console.log(n1-n2);
        break;
    default:
        console.log("Niether of them");
}
*/
//---Loop Statements----
/*
var sum = 0;
var start = 1;
var final = 3;

for (var i = start; i<=final; i++){
    sum= sum+i;
    console.log(i);
}
console.log(sum);
*/

// ---While Loop----
/*
var sum = 0;
var i = 1;
var final = 4;

while (i<=final){
    sum = sum +i;
    i++;
}
console.log("While sum: " ,sum);

// ---do While Loop----

var sum = 0;
var i = 1;
var final = 4;

do{
    sum = sum +i;
    i++;
} while (i<=final)
console.log("do-While sum: " ,sum);
*/

// Break Statement----
/*
for(var x=1; x<=5;x++){
    if(x==2){
        console.log("Hi,I'm 2");
        break;
    }
    console.log(x);
}

// continue Statement----

for(var x=1; x<=5;x++){
    if(x==2){
        console.log("Hi,I'm 2");
        continue;
    }
    console.log(x);
}
*/