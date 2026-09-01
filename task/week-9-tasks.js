// function getDetails(zName, zAge, zCountry) {

//   let message = `Hello`
//   function namePattern(zName) {
//     message = `${getDetails()} ${zName}`
//     let name = zName.split(" ");
//     return `${name[0]} ${name[1][0].toUpperCase()}.`;
//   }
//   function ageWithMessage(zAge) {
//     let age = parseInt(zAge);
//     return `Your Age Is ${age}`;
//   }
//   function countryTwoLetters(zCountry) {
//     return `you live in ${zCountry[0],zCountry[1]}`
//     // Egypt => You Live In EG
//     // Syria => You Live In SY
//   }
//   function fullDetails() {
//     // Write Your Code Here
//     return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
//   }
//   return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// // Hello Ahmed A., Your Age Is 32, You Live In SY

// func1 = () => `Iam A Normal Function`;

// console.log(itsMe()); // Iam A Normal Function

// func2 = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

func3 = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;

console.log(func3("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(func3("Ahmed")("Not Available")()); // Iam Not Avaialble

function specialMix(...data) {
  result = 0;
  numbers = parseInt(data);
  console.log(result + numbers);
  for (i = numbers; i > result; i++) {
    if (numbers === "string") {
      continue;
    }
  }
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
