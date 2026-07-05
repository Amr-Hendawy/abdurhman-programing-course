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