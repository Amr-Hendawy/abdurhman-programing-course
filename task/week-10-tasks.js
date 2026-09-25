// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// let mixMap = mix.map(function(e){
//     return isNaN(parseInt(e)) ? true : false
// })
// console.log(mixMap)
// Elzero

// let myString = "EElllzzzzzzzeroo";
// let filteredString = myString.filter(function(el){
//     return myString
// })
// Elzero

// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
// let nums = numsAndStrings.filter(function(e){
//     return !isNaN(parseInt(e))
// })
// console.log(nums)
// [-1, -10, 10, 20, -5, -3]

// let myArray = ["E", "l", "z", ["e", "r"], "o"];
// let arr = myArray
// let flattenArr = arr.flat()
// console.log(flattenArr)
// Elzero

let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce((acc, current) => {
  return current % 2 === 0
    ? acc * current
    : acc + current;
}, 1);

console.log(result);
// 500