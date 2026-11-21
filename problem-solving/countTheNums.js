function countNums(num) {
  num = Math.abs(num);
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum++;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(countNums(12345));

//12345 => 54321
//121 => 121 True  123 => 321 False