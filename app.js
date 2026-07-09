/*
lesson 1:
console.log,
window.onload
*/

window.onload = function(){
    this.document.querySelector(".parent").style.display = "flex";
}

console.log(123)


// lesson 2 output - datatypes


console.log(10)
console.log("10")
console.log("%cstop","color:red;text-shadow:5px 1px black; font-size:60px;")
console.log(["Abdulrahman","Amr","Mahmoad"])
window.alert("Hello")

// lesson 3 

console.error("This is an error");
console.info("This is an info message");
console.warn("This is a warning");
console.table(["Abdulrahman","Amr","Mahmoad"]);

// lesson 4 - datatypes

console.log(typeof "Abdulrahman");
console.log(typeof 10);
console.log(typeof 10.22);
console.log(typeof [1,2,3,4,5,6,7,8,9]);
console.log(typeof {name:"Abdulrahman",age:22});
console.log(typeof true);
console.log(typeof false);
console.log(typeof null);
console.log(typeof undefined);

var myName = "Abdulrahman";
const PI_VALUE = 3.14;
myName = "user";
let myAge = 11;

console.log("Amr Hendawy");
console.log('Amr Hendawy');
console.log("'Amr Hendawy'");
console.log('"Amr Hendawy"');
console.log("\"Amr Hendawy\"");
console.log("Amr \\ Hendawy");
console.log("Amr \
Hendawy");
console.log("Amr\nHendawy\nMohamed");

// lesson 5 - concatination

//let a = "I Love";
//let b = "JavaScript";
//let space = " ";

//console.log(a + " " + b);
//console.log(a + space + b);

let a = "I Love";
let b = "JavaScript";
let c = "and";
let d = "Programming";

//console.log(a+ "\" \" " + b + 
//   "\n" + c + " " + d);
//console.log(`${a} "" ''  \\${b}
//     ${c} ${d}`);

let title = "software Engineer";
let desc = "this position name lead to programing field";
let markup = `
<div class="card">
    <h3>${title}</h3>
    <p>${desc}</p>
</div>`
document.write(markup);

//Arithmetic
console.log(10 + 20);
console.log(10 - 20);
console.log(10 * 20);
console.log(10 / 20);
console.log(10 % 20);
console.log(2 ** 4);
//Assignment operators
let x = 10;

x += 20;