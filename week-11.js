//  Objects
// unordered list
// we can access properties by dot notation . - subscrible notation/bracket notation []

// let user = {
//   theName: "Abdurhman",
//   age: 10,
//   sayHello: function () {
//     return `Hello`;
//   },
// };

// console.log(user);

// console.log(user.theName);
// console.log(user["theName"]);

// console.log(user.age);
// console.log(user["age"]);

// console.log(user.sayHello());
// console.log(user["sayHello"]());

// let newVar = "country";

// let user = {
//   name: "Abdurhman",
//   country: "Egypt",
// //   newVar: "country1",
// };

// console.log(user.name);
// console.log(user.country);
// console.log(user.newVar);
// console.log(user[newVar]);

let avaiable = true;

let user = {
  name: "Abdurhman",
  age: 38,
  skills: ["HTML", "CSS", "JS"],
  avaiable: false,
  adresses: {
    ksa: "Riyadh",
    egypt: {
      one: "cairo",
      two: "giza",
    },
  },
  checkAva: function () {
    if (user.avaiable === true) {
      return `Free For Work`;
    } else {
      return `Not Free`;
    }
  },
};

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.skills);
console.log(user.skills.join(" | "));
console.log(user.skills[2]);
console.log(user.adresses.ksa);
console.log(user.adresses.egypt.one);
console.log(user["adresses"]["egypt"]["one"]);
console.log(user["adresses"].egypt["one"]);
console.log(user["adresses"].egypt.one);
console.log(user.checkAva());
