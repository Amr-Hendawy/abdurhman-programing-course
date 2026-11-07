// const students = ["omar","ahmed","mohamed","abdulrahman","ismail"]
// const studentslist = document.getElementById("list");
// students.forEach((student) => {
//     const li = document.createElement("li")
//     li.textContent = student;
//     studentslist.appendChild(li)
// })

// const products = [
//   { name: "laptop", price: 30000 },
//   { name: "mouse", price: 500 },
//   { name: "keyboard", price: 1000 },
// ];
// const container = document.getElementById("products");
// products.forEach((product) => {
//   const div = document.createElement("div");
//   div.innerHTML = `<h3>${product.name}</h3><h3>${product.price}</h3>`;
//   container.appendChild(div)
// });

// const items = document.querySelectorAll("li");
// const btn = document.getElementById("changeColor");
// const colors = ["red", "blue", "green", "purple", "brown"];
// items.forEach((item, index) => {
//   item.addEventListener("click", () => {
//     item.style.backgroundColor = colors[index % colors.length];
//     item.style.color = "white";
//     item.style.border = `${colors[index % colors.length]} 1px solid`
//     item.style.borderRadius = "50%";
//     item.style.textAlign = "center"
//     item.style.width = "80px"
//   });
// });

// const nums = [1,2,3,4,5]
// const result = nums.map((num) => {return num * num})
// console.log(result)

// const students = [
//   { id: 1, name: "Ahmed", age: 20 },
//   { id: 2, name: "Abdulrahman", age: 12 },
//   { id: 3, name: "Adel", age: 33 },
// ];
// const result = students.map((student) => {return student.name})
// console.log(result);

// const nums = [1,2,3,4,5,6,7,8,9,10]
// const result_even = nums.filter((even) => {return even % 2 == 0})
// const result_odd = nums.filter((even) => {return even % 2 == 1})
// console.log(result_even);
// console.log(result_odd);

// const nums = [1,2,3,-1,-2,-3]
// const result = nums.filter((positiveNumber)=>{
//     return positiveNumber > 0
// })
// console.log(result);

// const numbers = [-6,-34,35,-6,99,78]
// const result = numbers.find((num) => {return num > 0})
// console.log(result);

// const numbers = [-6,-34,35,-6,99,78]
// const result = numbers.some((num) => {return num > 0})
// console.log(result);

// const peoples = [
//   { name: "Abdulrahman", age: 12 },
//   { name: "Ahmed", age: 16 },
//   { name: "Adel", age: 20 },
// ];
// const result = peoples.every((people) => {
//   return people.age >= 18;
// });
// console.log(result);

// 1. create array of objects every object has name age id with uses of filter get the ages up to 18
// 2. create array of object named as students with using map get all names with upperCase
