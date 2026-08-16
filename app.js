/*
lesson 1:
console.log,
window.onload
*/

// window.onload = function(){
//     this.document.querySelector(".parent").style.display = "flex";
// }

// console.log(123)


// lesson 2 output - datatypes


// console.log(10)
// console.log("10")
// console.log("%cstop","color:red;text-shadow:5px 1px black; font-size:60px;")
// console.log(["Abdulrahman","Amr","Mahmoad"])
// window.alert("Hello")

// // lesson 3 

// console.error("This is an error");
// console.info("This is an info message");
// console.warn("This is a warning");
// console.table(["Abdulrahman","Amr","Mahmoad"]);

// // lesson 4 - datatypes

// console.log(typeof "Abdulrahman");
// console.log(typeof 10);
// console.log(typeof 10.22);
// console.log(typeof [1,2,3,4,5,6,7,8,9]);
// console.log(typeof {name:"Abdulrahman",age:22});
// console.log(typeof true);
// console.log(typeof false);
// console.log(typeof null);
// console.log(typeof undefined);

// var myName = "Abdulrahman";
// const PI_VALUE = 3.14;
// myName = "user";
// let myAge = 11;

// console.log("Amr Hendawy");
// console.log('Amr Hendawy');
// console.log("'Amr Hendawy'");
// console.log('"Amr Hendawy"');
// console.log("\"Amr Hendawy\"");
// console.log("Amr \\ Hendawy");
// console.log("Amr \
// Hendawy");
// console.log("Amr\nHendawy\nMohamed");

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

/*let myName = "Abdulrahman";

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

console.log(a.endsWith("d"), 3)*/


//Revision week 5

/*
==
!=
===
!==
>
>=
<
<=
*/

// console.log(10 == 10);
// console.log(10 == "10");
// console.log(10 == "10");
// console.log(10 != 10);
// console.log(10 != "A");


// console.log(10 === 10);
// console.log(10 === "10");
// console.log(10 === 5);

// console.log(10 !== 5);
// console.log(10 !== "A");

// console.log(10 > 9.1);
// console.log(10 < 10.1);

// console.log(10 <= 10);
// console.log(10 >= 10);


// ! && ||

/*console.log(true);
console.log(!true);
console.log(!(10 =="10"));
console.log(10 == "10" && 10 > 8 && 10 > 50);
//true && true && false

console.log(10 == "10" || 10 > 8 || 10 > 50);
//true || true || false


let price = 200;
let discount = false;
let discountAmount = 50;
let country = "Egypt";
let student = true;

if (discount === true) {
    price -= discountAmount;
}else if (country === "Egypt") {
    if (student === true) {
        price -= discountAmount + 50;
    }else{
        price -= discountAmount;
    }
} else if ((country === "Canada")) {
    price -= discountAmount - 35;
} else {
    price -= discountAmount - 30
}

console.log(price)*/


// let theName = "Abdulrahman"
// let theGender = "male"
// let theAge = 50;

// if (theGender === "male"){
//     console.log("Mr");
// } else {
//     console.log("Mrs")
// }
// let result = theGender === "Male" ? "Mr" : "Mrs";
// console.log(result);

// console.log(`Hello ${theGender === "male" ? "Mr" : "Mrs"} ${theName}`);

// theAge < 20 ? console.log(20) : theAge > 20 && theAge < 50 ? console.log("20 to 60"): theAge > 60 ? console.log("Bigger than 60"): console.log("unknown");


// console.log(Boolean(100))
// console.log(Boolean(-100))
// console.log(Boolean(false))
// console.log(Boolean(true))
// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean())
// console.log(Boolean(""))

// let price = 0;

// console.log(`the price is ${price || "unknown"}`)
// console.log(`the price is ${price ?? "unknown"}`)


// let day = "saturday"

// switch (day){
//     case"saturday":
//     console.log(`it is ${day}1`)
//     break;
//     case"sunday":
//     console.log(`it is ${day}2`)
//     break;
//     default:
//         console.log("I dont know the day")
// }


//lesson 8 - arrays


// literal - constructor

// let friends = ["Ahmed","Amr","samy","dawood"]
// console.log(friends);

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);

// console.log(typeof friends[0]);

// let data = ["Ahmed",10,true,100.5,undefined,null,["A","B","C"],{name:"Abdulrahman",age:22}]
// console.log(data[2]);
// console.log(`Hello ${data[0]}`);
// data[3] = null;
// console.log(data);
// console.log(Array.isArray(data));
// data.length = 2
// console.log(data);
//  let data = ["Amr","Samy","Ahmed"];

//  console.log(data);
//  data.unshift("Abdulrahman","Mahmoud");
//  console.log(data);
//  data.shift();
//  console.log(data);
//  data.push("Abdulrahman","Mahmoud");
//  console.log(data);
//  data.pop();
//  console.log(data);

// console.log(data.indexOf("Amr"));

// console.log(data.lastIndexOf("Amr", -1));
// console.log(data.includes("Amr", -1));

//console.log(data.sort().reverse());

// let data = ["Amr","Samy","Ahmed"];
// console.log(data.slice(0, 3));
// console.log(data.slice(-3));
// console.log(data.slice(-4, -2));

// data.splice(1, 3, "Abdulrahman", "Mahmoud");
// console.log(data);

// let friends = ["Amr","Samy","Ahmed","Zyad"];
// let oldfriends = ["Shady","Haitham"];
// let allfriends = friends.concat(oldfriends, friends);

// console.log(friends.join(" "));
// console.log(friends.join(" / "));
// console.log(friends.join(" ** "));
// console.log(friends.join(" # ").toUpperCase());


// week 7 - loops
// let myPals = [1,2,5, "Amr","Osama", 6, "Abdulrahman"];
// let onlyNames = [];
// let onlyNums = [];

// for (let i = 0; i < myPath.length; i++) {
//     if (typeof myPals[i] === "number"){
//         onlyNums.push(myPals[i])
//     }
// };


// console.log(onlyNames);
// let names = [1, 2, 3, 4, "Ahmed","omar","saeed",6,"Ali",10];
// let onlyStr = [];
// let onlyNums = [];
// let combined = [];
// for (let i = 0; i < names.length; i++) {

//     if (typeof names[i] === "string") {
//         onlyStr.push(names[i]);
//     } else {
//         onlyNums.push(names[i])
//     }
// }

// let x = combined.concat(onlyStr, onlyNums);

// console.log(onlyStr)
// console.log(onlyNums)
// console.log(x)



// week 7 - loops - part2

// let items = ["Xbox 360","PS5 Pro","RTX 3070 TI","Joysticks redDragon"]
// let colors = ["Red","Blue","Purple"];
// let models = [2026, 2027];

// for (let i = 0; i < items.length;i++) {
//     console.log("-".repeat(15));
//     console.log(items(i));
//     console.log("-".repeat(15));
//     for (let j = 0;j < colors.length;j++) {
//         console.log(colors[j]);
//     }
// for (let k = 0; k < models.length;k++) {
//     console.log(models[k])
// }
// }

// let items = ["Xbox 360","PS5 Pro","RTX 3070 TI","Joysticks redDragon"]
// let colors = ["Red","Blue","Purple"];

// mainloop: for (let i = 0; i < items.length; i++) {
//     console.log(item[i]);
//     nestedloop: for (let j = 0; j < colors.length; j++) {
//         console.log(colors[j]);
//         if (colors[j]);
//         if (colors[j] === "Blue") {
//             //continue mainloop;
//             break mainloop;
//         }
//     }
// }

// let items = ["Xbox 360","PS5 Pro","RTX 3070 TI","Joysticks redDragon"]
// let i = 0
// for (; 1 < items.length; ){
//     console.log(items(i));
//     i++;
//     if (1 === items.length) break;
// }

// let items = ["Xbox 360","PS5 Pro","RTX 3070 TI","Joysticks redDragon"]

// let index = 0;

// while (index < items.length) {
//     console.log(items[index]);
//     index++
// }

// do {
//     console.log(index);
//     index++;
// } while (false);

// console.log(index)

// week8 - functions
// function sayHi(username) {
//     console.log(`Hi ${username}`);
// }

// sayHi("Abdulrahman")
// sayHi("Amr")
// sayHi("Ahmed")

// function sayHi(username,age) {
//     if (age <20) {
//         console.log("App is not suitable for this age");
//     } else {
//         console.log(`Hello ${username} your age is ${age}`);
//     }
// }

// sayHi("Abdulrahman",11)
// sayHi("Amr",34)

// function getYears(start,end,exclude,stoppedYear) {
//     for (let i = start; i <= end; i++) {
//         if (i === exclude) continue;
//         if (i === stoppedYear) break;

//         console.log(i);
//     }
// }

// getYears(2005, 2026, 2020, 2021)