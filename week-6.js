// literal - constructor

// let data = [
//   "Ahmed",
//   1,
//   true,
//   [2, 3],
//   null,
//   undefined,
//   {
//     name: "Abdurhman",
//     age: 14,
//   },
//   function () {
//     console.log("Hello");
//   },
// ];
// let data = ["Ahmed", "Amr", "Samy"];
// let nums = [1, 2, 4, 8, 6, 87, 75];
// console.log("Hello " + data[3][2][0][1]);
// console.log(`Hello ${data[3][2][0][1]}`);
// data[3] = "Amr";
// console.log(data);

// console.log(Array.isArray(data));
// console.log(data.length);
// data.length = 2;
// console.log(data);

// console.log(data);
// data.unshift("Ameer", "Mohsen");
// console.log(data);
// data.shift();
// console.log(data);
// data.push("Ameer", "Mohsen");
// console.log(data);
// data.pop();
// console.log(data);

// console.log(data.indexOf("Ahmed"));
// console.log(data.indexOf("ahmed"));

// console.log(data.lastIndexOf("Ahmed", -1));
// console.log(data.includes("Ahmed", 1));

// if (data.indexOf("amr") === -1) {
//   console.log("Amr is not found");
// }

// console.log(typeof friends[0]);
// console.log(data.sort());
// console.log(data.sort().reverse());

// console.log(data.slice(1, 3));
// console.log(data.slice(-3));
// console.log(data.slice(-4, -2));

// data.splice(1, 3, "sameer", "Mohamed");
// console.log(data);

let friends = ["Amr", "Samy", "Ahmed", "Zyad"];
let oldFriends = ["Shady", "Haitham"];
let newFriends = ["Ali", "Gamal"];

// let allFriends = friends.concat(oldFriends, newFriends, "Tamer", [1, 2]);
// console.log(allFriends);

console.log(friends.join());
console.log(friends.join(""));
console.log(friends.join(" - "));
console.log(friends.join(" / "));
console.log(friends.join(" @ "));
console.log(friends.join(" ** ").toUpperCase());
