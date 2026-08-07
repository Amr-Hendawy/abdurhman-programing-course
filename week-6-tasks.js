let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
myFriends.pop();
console.log(myFriends)
// Method 2
console.log("Your Code Here"); // ["Ahmed", "Elham", "Osama"];
myFriends.length = 3;


let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

console.log(friends); // ["Eman", "Osama"]
friends.shift();
friends.pop();



let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = friends.concat(arrOne, arrTwo)

// Write One Single Line Of Code

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]



let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log("Your Code Here"); // "Go"



let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

console.log(haystack.indexOf(needle)); // 1
console.log(haystack.lastIndexOf(needle)); // 1
console.log(haystack.includes(needle)); // true




let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = allArrs.concat(arr1,arr2);

// Your Code Here

console.log(allArrs); // fxy
