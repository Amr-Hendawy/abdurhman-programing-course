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

/*let a = "I Love";
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

x += 20;*/
//lesson 6 - numbers
/*console.log((100.5).toString());
console.log((100.5).toString());
console.log((100.55455).toFixed(2));
console.log(Number("100 Amr"));
console.log(+"100 Amr");
console.log(parseInt("100 Amr"));
console.log(parestInt("Amr 100 Amr"))

console.log(parestInt(1050.3))
console.log(parestFloat("A 1050 Amr"))
console.log(parestFloat("1050.3 Amr"))


console.log(Number.isInteger("100"))
console.log(Number.isInteger(100))
console.log(Number.isInteger(100.5))
console.log(Number.isNaN(10))
console.log(Number.isNaN("Amr" / 10))


console.log(Math.round(99.2))
console.log(Math.round(99.5))
console.log(Math.ceil(99.9))
console.log(Math.ceil(99.1))

console.log(Math.floor(99.0))
console.log(Math.floor(99.9))

console.log(Math.pow(2,4))
console.log(Math.random())
console.log(Math.trunc(99.9))*/

// lesson 7 - strings

let myName = "Abdulrahman";

console.log(myName);
console.log(myName[0]);
console.log(myName[1]);
console.log(myName[2]);
console.log(myName[3]);
console.log(myName[4]);
console.log(myName[5]);
console.log(myName[6]);
console.log(myName[7]);
console.log(myName[8]);
console.log(myName[9]);

console.log(myName[-1]);

console.log(myName.length)
console.log(myName.trim())
çonsole.log(myName.toUppercase())
console.log(myName.toLowercase())
console.log(myName.trim().chartAt(2).toUppercase())
let a = "Abdulrahman Khalid mersal";

console.log(a.indexOf("Khalid"))
console.log(a.indexOf("Khalid",11))
console.log(a.indexOf("a",8))
console.log(a.lastIndexOf("a"))

console.log(a.slice(2, 6));
console.log(a.slice(-5, -3))

console.log("10".repeat(5));

console.log(a.split("", 6));

console.log(a.length);
console.log(a.substring(1, 5));
console.log(a.substring(-10, 10));
console.log(a.substring(a.length - 5, a.length - 3));
console.log(a.includes("Khalid"));
console.log(a.includes("Khalid", 12));

console.log(a.startsWith("a"),7)

console.log(a.endsWith("d"), 3)




