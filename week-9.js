// let calculator = function (num1, num2) {
//   return num1 + num2;
// };

// console.log(calculator(5, 7));

// function sayHi() {
//   console.log("Hello Abdurhman");
// }

// document.getElementById("show").onclick = sayHi();

// setTimeout(function () {
//   console.log("Hello Abdurhman");
// },2000);

// Example 1
// function sayMessage(fName, lName) {
//   let message = `Hello`;
//   function concatNames() {
//     message = `${message} ${fName} ${lName}`;
//   }
//   concatNames();
//   return message;
// }
// console.log(sayMessage("Abdurhman", "Khalid"));

// Example 2

// function sayMessage(fName, lName) {
//   let message = `Hello`;
//   function concatNames() {
//     return `${message} ${fName} ${lName}`;
//   }

//   return concatNames();
// }
// console.log(sayMessage("Abdurhman", "Khalid"));

// Example 3

// function sayMessage(fName, lName) {
//   let message = `Hello`;
//   function concatNames() {

//     function getFullName() {
//       return `${fName} ${lName}`;
//     }
//     return `${message} ${getFullName()}`;
//   }

//   return concatNames();
// }
// console.log(sayMessage("Abdurhman", "Khalid"));

// Arrow Function

// Regular Function
// let print = function () {
//   return 10;
// };

// Arrow Function (Big Fat Function) No Prarms
// let print = _ => 10;

// Has One Param
// let print = num1 => num1;

// Has Params
// let print = (num1, num2) => num1 + num2;
// console.log(print(10, 50));

// var a = 10;
// var b = 15;

// function showText() {
// var a = 10;
// var b = 15;
// console.log(`From Local ${a}`);
// console.log(`From Local ${b}`);
// }
// console.log(`From global ${a}`);
// console.log(`From global ${b}`);

// showText();

// var x = 10;

//  for - switch - if

function parent() {
  let a = 10;

  function child() {
    console.log(a);
    // console.log(`From child ${b}`);

    function grand() {
      let b = 100;
      console.log(`From Grand ${a}`);
      console.log(`From Grand ${b}`);
    }
    grand();
  }
  child();
}
parent()
