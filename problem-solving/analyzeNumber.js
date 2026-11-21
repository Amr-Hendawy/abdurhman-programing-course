function analyzeNumber(num) {
  let type = "";
  let parity = "";
  if (num % 2 === 1) {
    type = "your number is odd";
  } else {
    type = "your number is even";
  }

  if (num > 0) {
    parity = "positive";
  } else if (num < 0) {
    parity = "negative";
  } else {
    parity = "zero";
  }
  return `${type},${parity}`
}
console.log(analyzeNumber(0));