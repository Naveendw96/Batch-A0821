// console.log(document.querySelectorAll(".firstbox"))
// console.log(document.getElementsByClassName("firstbox"))

console.log(document.getElementById("internal_ul"));

console.log(document.querySelectorAll("#list1"));
console.log(document.getElementsByClassName("firstbox"))
console.log(document.getElementById("heading_1"))
console.log(document.getElementsByClassName("heading2"))

console.log(document.querySelector(".firstbox").innerHTML)


const childNodeanything = document.createElement("div");  //creating div
childNodeanything.className = "mystyle"                   // add single class
childNodeanything.classList.add("mystyle1");               //add multiple class to it
childNodeanything.classList.add("mystyle2"); 
childNodeanything.innerHTML = "New div is added"
document.getElementById("internal_ul").appendChild(childNodeanything)  //add div as the child of another element

const newheader = document.createElement("h1");  //creating h1
newheader.className = "mystyle"                   // add single class
newheader.classList.add("mystyle1");               //add multiple class to it
newheader.classList.add("mystyle2"); 
newheader.innerHTML = "New h1 is added"
document.getElementById("internal_ul").appendChild(newheader)  //add h1 as the child of another element
