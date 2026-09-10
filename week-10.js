// Higher Order Function map - filter - reduce - foreach -  some - every
// A function that accepts functions as parameters and/or returns a function

// - Map
// ---- Method create a new array
// --- populated with results of calling a provided function on every element
// --- in the calling array

//  Syntax map(callBackFunction(element, index, array) { }, thisArg)
//  - Elemnt => the current element being processed in the array
//  - index => In the index of the current element being processed in the array
//  - Array => the current array

// Notes => Map return new array

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArray = [];

// for (let i = 0; i < nums.length; i++) {
//   newArray.push(nums[i] + nums[i]);
// }
// console.log(newArray);

// Same idea with map
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // let addSelf = nums.map(function (element, index, arr) {
// //   console.log(`Cureent Element => ${element}`);
// //   // console.log(`Curent Index => ${index}`);
// //   // console.log(`Curent Array => ${arr}`);
// //   // console.log(`This => ${this}`);

// //   return element + element;
// // }, 11);

// // console.log(addSelf);

// let add = nums.map((e) => e + e);

// console.log(add);

// function addition(e) {
//   return e + e;
// }

// let add = nums.map(addition);
// console.log(add);

// let SwappingCases = "aBDurhMAN";

// let sw = SwappingCases.split("").map(function (e) {
//   return e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase();
// });

// let sw = SwappingCases.split("").map((a) =>
//   a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase(),
// );

// console.log(sw);

// let invertedNumbers = [1, -15, -22, 14, 99, -55];

// let inv = invertedNumbers.map(function (e) {
//   return -e;
// });

// console.log(inv);

// let ignoredNums = "A55b6d3ur1h0man8";

// let ign = ignoredNums
//   .split("")
//   .map(function (e) {
//     return isNaN(+e) ? e : "";
//   })
//   .join("");

// console.log(ign);
// ==================================

// Higher Order Function
// With all elemnts that pass the test implemented by the provided function

// - Filter

//  Syntax filter(callBackFunction(element, index, array) { }, thisArg)
//  - Elemnt => the current element being processed in the array
//  - index => In the index of the current element being processed in the array
//  - Array => the current array

// let friends = ["Ahmed", "Ali", "Samy", "Amr", "Asmaa", "Maged"];

// let filteredFriends = friends.filter(function (element) {
//   return element.startsWith("A") ? true : false;
// });

// console.log(filteredFriends);

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let addSelf = nums.filter(function (element,) {
//   console.log(`Cureent Element => ${element}`);
//   return element + element;
// });

// console.log(addSelf);

// let numbers = [11, 20, 2, 5, 17, 10];

// let evenNumbers = numbers.filter(function (el) {
//   return el % 2 === 1;
// });

// console.log(evenNumbers);

// let sentence = "I love Coooode too Playing playing much";

// let smallWords = sentence
//   .split("")
//   .filter(function (e) {
//     return e.length <= 4;
//   })
//   .join(" ");

// console.log(smallWords);

let ignoreNumbers = "Abd132u5r3hman";
let ign = ignoreNumbers
  .split("")
  .filter(function (e) {
    return isNaN(parseInt(e));
  })
  .join("");

console.log(ign);

// isNaN(+"5")
// isNaN(+"A")

// let mix = "A13BS2ZX";

// let mixedContent = mix
//   .split("")
//   .filter(function (e) {
//     return !isNaN(+e);
//   })
//   .map(function (e) {
//     return e * e;
//   })
//   .join("");

// console.log(mixedContent);


