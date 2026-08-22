// function sayHello(theName, theGender) {
//    if (theGender == "Male") {
//     console.log(`Helo Mr ${theName}`)
//    } else if (theGender == "Female"){
//     console.log(`Hello Miss ${theName}`)
//    } else {
//     console.log(`Hello ${theName}`)
//    }
// }

// // Needed Output
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"

// function calculate(firstNum, secondNum, operation) {
//   if (operation == "add") {
//     console.log(firstNum + secondNum);
//   } else if (operation === "subtract") {
//     console.log(firstNum - secondNum);
//   } else if (operation === "multiply") {
//     console.log(firstNum * secondNum);
//   } else if (!operation) {
//     console.log(firstNum + secondNum);
//   } else if (!secondNum) {
//     console.log("Second Number Not Found");
//   }
// }

// Needed Output
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, "add"); // 50
// calculate(20, 30, "subtract"); // -10
// calculate(20, 30, "multiply"); // 600

// function ageInTime(theAge) {
//   if (theAge >= 110) {
//     return "Age Out Of Range";
//   } else {
//     return ` My age in Years is ${theAge}
//       My age in Months is ${theAge * 12}
//       My age in Days is ${theAge * 12 * 30}
//       My age in Hours is ${theAge * 12 * 30 * 24}
//       My age in Minutes is ${theAge * 12 * 30 * 24 * 60}
//       My age in Seconds is ${theAge * 12 * 30 * 24 * 60 * 60}`;
//   }
// }

// // Needed Output
// console.log(ageInTime(110)); // Age Out Of Range
// console.log(ageInTime(38)); // Months Example => 456 Months

function checkStatus(a, b, c) {
  // Your Code Here
  let name;
  let age;
  let available;

  if (typeof a === "string") {
    name = a;
  } else if (typeof b === "string") {
    name = b;
  } else {
    name = c;
  }

  if (typeof a === "number") {
    age = a;
  } else if (typeof b === "number") {
    age = b;
  } else {
    age = c;
  }
  
  if (typeof a === "boolean") {
    available = a;
  } else if (typeof b === "boolean") {
    available = b;
  } else {
    available = c;
  }
  return `Hello ${name}, your age is ${age} you are ${available ? "Available" : "Not Available"} For Hire`;
}
// // Needed Output
console.log(checkStatus("Osama", 38, true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(38, "Osama", true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(true, 38, "Osama")); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(false, "Osama", 38)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
