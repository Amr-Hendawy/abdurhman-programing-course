// Higher Order Function
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

// let addSelf = nums.map(function (element, index, arr) {
//   // console.log(`Cureent Element => ${element}`);
//   // console.log(`Cureent Index => ${index}`);
//   // console.log(`Cureent Index => ${arr}`);
//   // console.log(`This => ${this}`);

//   return element + element;
// });

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

let ignoredNums = "A55b6d3ur1h0man8";

let ign = ignoredNums
  .split("")
  .map(function (e) {
    return isNaN(+e) ? e : "";
  })
  .join("");

console.log(ign);
