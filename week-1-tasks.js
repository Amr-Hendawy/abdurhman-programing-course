// window.onload = function () {
//   this.document.querySelector("h1").style.color = "blue";
//   this.document.querySelector("h1").style.fontSize = "80px";
//   this.document.querySelector("h1").style.fontWeight = "bold";
//   this.document.querySelector("h1").style.textAlign = "center";
//   this.document.querySelector("h1").style.fontFamily = "Arial";
// };
// console.log("%cElzero", "color:red; 1px black; font-size:60px;");
// console.log("%cWeb", "color:green; 1px black; font-size:60px;");
// console.log("%cSchool", "background-color:blue; 1px black; font-size:60px;");

console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");

console.groupEnd();
console.groupEnd();
console.groupEnd();
console.groupEnd();

console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd();

/*
console.log("Iam In Console");
document.write("Iam In Page");
*/
