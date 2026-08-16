// Functions
// function sayHi(username) {
//   console.log(`Hi ${username}`);
// }

// sayHi("Abdurhman");
// sayHi("Amr");
// sayHi("Ahmed");

// function sayHi(username, age) {
//   if (age < 20) {
//     console.log(`App is not suitable for this age`);
//   } else {
//     console.log(`Hello ${username} your age is ${age}`);
//   }
// }
// sayHi("Abdurhman", 21);
// sayHi("Amr", 4);

function getYears(start, end, exculde, stoppedYear) {
  for (let i = start; i <= end; i++) {
    if (i === exculde) continue;
    if (i === stoppedYear) break;

    console.log(i);
  }
}

getYears(2005, 2026, 2020, 2021);
