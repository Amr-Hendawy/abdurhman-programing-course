var x = [];
var sd = (n = ave = a = b = i = 0);
// i = 0
// n = input("enter nums of nums do you have")
// a = 0
// b = 0
// ave = a/n
// = 0
// total = 0

n = parseInt(prompt("How many Items?"));

for (var i = 0; i < n; i++) {
  x[i] = +prompt("Give me items ?");
  ave += x[i];
}
ave = ave / n;
console.log(ave);

for (let j = 0; j < n; j++) {
  a += Math.pow(x[j] - ave, 2);
  console.log(a);
}

b = a / n;

sd = Math.sqrt(b);
console.log(sd);

// var zz = ["A", "B", "C"];

// console.log(zz[0]);
// console.log(zz[1]);
// console.log(zz[2]);
