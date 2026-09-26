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

// let ignoreNumbers = "Abd132u5r3hman";
// let ign = ignoreNumbers
//   .split("")
//   .filter(function (e) {
//     return isNaN(parseInt(e));
//   })
//   .join("");

// console.log(ign);

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

// - Reduce
// -- Method excutes a reducer function on each element of the array
// -- resulting in a single output value

//  Syntax reduce(callBackFunction(Accumulator, current value,current index,source array) { }, intial value)
//  - Accumulator => the accumulated value previously returned in the last invocation
//  - current value => The current element being processed in the array
//  ------------ Starts from index 0 if an intialValue is provided
//  ------------ Otherwise it starts from index 1
// - Array => The current array

// let nums = [10, 20, 15, 30];

// let add = nums.reduce(function (acc, current, index, arr) {
//   // console.log(`Accumulator is ${acc}`);
//   // console.log(`current is ${current}`);
//   // console.log(`index is ${index}`);
//   // console.log(`arr is ${arr}`);
//   return acc + current;
// },25);

// console.log(add);

// let theLargest = ["xyz", "XBox", "PC", "Playstation", "Mobile", "Playstation0"];

// let check = theLargest.reduce(function (acc, current) {
//   // console.log(`Acc ==> ${acc}`);
//   // console.log(`Currrent Element ==> ${current}`);
//   // console.log(acc.length > current.length ? acc : current);
//   // console.log(`---------------`);
//   return acc.length > current.length ? acc : current;
// });

// console.log(theLargest);
// let removeChars = ["E", "A", "$", "@", "R", "Z", "!", "G", "M", "F"];

// let finalString = removeChars
//   .filter(function (ele) {
//     return ele !== "$" && ele !== "@" && ele !== "!";
//   })
//   .reduce(function (acc, current) {
//     return `${acc}${current}`;
//   });

// console.log(finalString);

// - forEach
// -- Method excutes a a provided function once for each array elemnts
// -- resulting in a single output value

//  Syntax forEach(callBackFunction(element, index,array) { }, thisArg)
//  - Elemnt => the current element being processed in the array
//    - Index => The index of the current element being processed in the array.
// - Array - The Current Array

// Note
//  -- Doesn't Return Anything [undefined]
// Break Will Not Break The Loop

let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

allLis.forEach(function (ele) {
  console.log(ele);

  ele.onclick = function () {
    allLis.forEach(function () {
      ele.classList.remove("active");
    });

    this.classList.add("active");

    allDivs.forEach(function (ele) {
      ele.style.display = "none";
    });
  };
});
