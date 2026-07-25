//  ====== Strings ========= \\

// let myName = "          Abdurhman    ";

// console.log(myName);
// console.log(myName[0]);
// console.log(myName[1]);
// console.log(myName[2]);
// console.log(myName[3]);
// console.log(myName[4]);
// console.log(myName[5]);
// console.log(myName[6]);
// console.log(myName[7]);
// console.log(myName[8]);

// console.log(myName[9]);
// console.log(myName[-1]);

// console.log(myName.length);
// console.log(myName.trim());
// console.log(myName);
// console.log(myName.trim());
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());
// console.log(myName.trim().charAt(2).toUpperCase());

let a = "Abdurhman Khalid Mohamed";

// console.log(a.indexOf("Khalid"));
// console.log(a.indexOf("Khalid", 11));
// console.log(a.indexOf("a", 8));
// console.log(a.lastIndexOf("a"));

// console.log(a.slice(2, 6));
// console.log(a.slice(-5, -3));

// console.log(a.repeat(5));

// console.log(a.split("?"));

// console.log(a.length);
// console.log(a.substring(1, 5));
// console.log(a.substring(-10, 11)); // 0 - 10
// console.log(a.substring(a.length - 5, a.length - 2)); // 19 - 21
// console.log(a.includes("Khalid"));
// console.log(a.includes("Khalid", 12));

// console.log(a.startsWith("a", 7));

// console.log(a.endsWith("d"));

// Revise Week 5

//  Comparison Operator
/*
    ==      equal
    !=      not equal
    ===     identical
    !==     not identical
    >       larger than
    >=      larger than or equal
    <       smaller than
    <=      smaller than or equal
*/

// console.log(10 == 10);
// console.log(10 == "10");
// console.log(10 != "10");
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

// console.log(true);
// console.log(!true);
// console.log(!(10 == "10"));
// console.log(10 == "10" && 10 > 8 && 10 > 50);
// true && true && false

// console.log(10 == "10" || 10 > 8 || 10 > 50);
// true || true || false

// let price = 200;
// let discount = true;
// let discountAmount = 50;
// let country = "Egypt";
// let student = true;
// if (codition) {

// } else if (condition 2) {

// } else if (condition 3) {

// } else {

// }

// if (discount === false) {
//   price -= discountAmount;
// } else if (country === "Egypt") {
//   if (student === true) {
//     price -= discountAmount + 50;
//   } else {
//     price -= discountAmount - 10;
//   }
// } else if (country === "Canada") {
//   price -= discountAmount - 35;
// } else {
//   price -= discountAmount - 30;
// }

// console.log(price);

let theName = "Abdurhman";
let theGendar = "Male";
let theAge = 50;

// if (theGendar === "Male") {
//   console.log("Mr");
// } else {
//   console.log("Mrs");
// }

//  condition ? true : false

// let result = theGendar === "Male" ? "Mr" : "Mrs";
// console.log(result);

// console.log(`Hello ${theGendar === "Male" ? "Mr" : "Mrs"} ${theName}`);

// theAge < 20
//   ? console.log(20)
//   : theAge > 20 && theAge < 50
//     ? console.log("20 to 60")
//     : theAge > 60
//       ? console.log("Bigger than 60")
//       : console.log("Unknown");

// condition ? If true : condition ? If true : condition ? If true : false;

// falsey values ==> 0 "" null undefined NaN
// console.log(Boolean(100));
// console.log(Boolean(-100));
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(""));
// console.log(Boolean(NaN));
//  ||
// ?? ==> null undefined

// let price = "";

// console.log(`The price is ${price || "unknown"}`);
// console.log(`The price is ${price ?? "unknown"}`);

// switch statement

/*
switch (expression) {
    case caseName:
    // code block
    break;
    case caseName:
    // code block
    break;
    default:
    // code block
    break;
}
*/

let day = "Wednesday";

switch (day) {
  case "Saturday":
    console.log(`It Is ${day} 1`);
    break;
  case "Sunday":
    console.log(`It Is ${day} 2`);
    break;
  case "Monday":
  case "Wednesday":
    console.log(`It Is ${day} 3`);
    break;
  case "Tuesday":
    console.log(`It Is ${day} 4`);
    break;
  default:
    console.log("I don't know the day");
}
