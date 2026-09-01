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

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArray = [];

for (let i = 0; i < nums.length; i++) {
  newArray.push(nums[i] + nums[i]);
}

console.log(newArray);
