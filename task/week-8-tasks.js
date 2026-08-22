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
//    if (operation == 'add') {
//     console.log(firstNum + secondNum);
//    }else if (operation == 'subtract') {
//     console.log(firstNum - secondNum);
//    }else if (operation == 'multiply') {
//     console.log(firstNum * secondNum);
//    }else if (operation == undefined) {
//     console.log(firstNum + secondNum);
//    }else if (secondNum == undefined){
//     console.log("Second Number Not Found")
//    }

// }

// // Needed Output
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, 'add'); // 50
// calculate(20, 30, 'subtract'); // -10
// calculate(20, 30, 'multiply'); // 600


// // function ageInTime(theAge) {
// //   if (theAge >= 110) {
// //     return "Age Out of Range";
// //   } else {
// //     return `my age in years is ${theAge}
// //     my age in months is ${theAge * 12}
// //     my age in years is ${theAge * 12 * 30}
// //     my age in years is ${theAge * 12 * 30 * 24}
// //     my age in years is ${theAge * 12 * 30 * 24 * 60}
// //     my age in years is ${theAge * 12 * 30 * 24 * 60 * 60}`
// //   }
// // }

// // // Needed Output
// // ageInTime(110); // Age Out Of Range
// // ageInTime(38); // Months Example => 456 Months


// function checkStatus(a, b, c) {
//   let name;
//   let age;
//   let available;

//   if (typeof a == "string") {
//     name = a;
//   } else if (typeof b === "string"){
//     name = b;
//   } else {
//     num = c
//   }
// }

// Needed Output
// checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// function createSelectbox(startYear,endYear) {
//   const select = document.createElement("select");

//   for (let year = startYear; year <= endYear; year++) {
//     const option = document.createElement("option");
//     option.value = year;
//     option.textContent = year;
//     select.appendChild(option);

//   }

//   document.body.appendChild(select);
// }

// createSelectbox(2000,2022)
function multiply(...nums) {
  let result = 1;
  for (let i = 0; i < nums.length;i++) {
    if (typeof nums[i] === "number") {
      result *= Math.trunc(nums[i])
    }
  }
  return result
}

console.log(multiply(10, 20));

console.log(multiply("A", 10, 30)) // 300
console.log(multiply(100.5, 10, "B")) // 1000