// console.log(100 == "100"); // true
// console.log(100 < 1000); // true
// console.log(110 > 100 > 10 < 20); // true
// console.log(-10 == "-10"); // true
// console.log(100 -50 < 100 +"-40"); // true
// console.log(10 < 100 >"-40"); // true
// console.log( "10" == 10); // true
// console.log(20 != false); // true


// let num1 = 10;
// let num2 = 20;

// console.log(num1 == true); // true
// console.log(num2 != false); // true
// console.log(num1 !== "10"); // true
// console.log(num2 === 20); // true
// console.log(num1 < num2); // true
// console.log(num2 > 10); // true


// let a = 20;
// let b = 30;
// let c = 10;

// console.log(a < b && a > c || a < b); // true
// console.log(a < b > a > c); // true
// console.log((a < b) && !(a > b) && !(a < c) && !(a > c)); // true

// Test Case 1
let num = 9; // "009"

// Test Case 2
let num2 = 20; // "020"

// Test Case 3
let num3 = 110; // "110"

if (num < 10){
    console.log(`00${num}`)
}else if(100 > num > 10){
    console.log(`0${num}`)
}else if(num > 100,num == 100){
    console.log(`${num}`)
}


let num1 = 9;
let str = "9";
let str2 = "20";

// Output
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"
