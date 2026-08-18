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

function calculate(firstNum, secondNum, operation) {
   if (operation == 'add') {
    console.log(firstNum + secondNum);
   }else if (operation == 'subtract') {
    console.log(firstNum - secondNum);
   }else if (operation == 'multiply') {
    console.log(firstNum * secondNum);
   }else if (operation == undefined) {
    console.log(firstNum + secondNum);
   }else if (secondNum == undefined){
    console.log("Second Number Not Found")
   }

}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600


// function ageInTime(theAge) {
  
// }

// // Needed Output
// ageInTime(110); // Age Out Of Range
// ageInTime(38); // Months Example => 456 Months


// function checkStatus(a, b, c) {
//   // Your Code Here
// }

// // Needed Output
// checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


