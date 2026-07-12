// Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(10 * 10 * 10 * 10 * 10); // 100000
console.log(10 ** 5); // 100000
console.log(1e2 * 1e3); // 100000
console.log(2 * 50000); // 100000
console.log(200000 / 2); // 100000
console.log(99999 + 1); // 100000
console.log(100001 - 1); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(parseInt("100000")); // 100000
console.log(Number("100000")); // 100000
console.log(5 ** 5 * 32); // 100000
console.log(0x186a0); // 100000
console.log(0b11000011010100000); // 100000

console.log(Number.MIN_SAFE_INTEGER); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 16

let myVar = "100.56789 Views";

console.log((100.56789).toFixed(0)); // 100
console.log((100.56789).toFixed(2)); // 100.57

let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

let flt = 10.4;

console.log(+flt.toString()); // 10
console.log(+flt.toFixed(0)); // 10
console.log(Math.floor(flt)); // 10
console.log(+flt.toString().split(".")[0]); // 10
console.log(Math.trunc(flt)); // 10
console.log(~~flt); // 10
console.log(~~flt); // 10
console.log(flt | 0); // 10
console.log(flt >> 0); // 10 very advanced
