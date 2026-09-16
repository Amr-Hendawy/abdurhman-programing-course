function min(arr) {
  if (arr.length === 0) {
    console.log("Array is empty");
    return;
  }

  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  console.log("min:", min);
}
function max(arr) {
  if (arr.length === 0) {
    console.log("Array is empty");
    return;
  }
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log("Max:", max);
}

function calculate(op,...nums) {
    if(nums.length === 0){
        return "you need at least to type 2 numbers"
    }
    if(op === "+") {
        let result = 0
        for(let i = 0;i < nums.length;i++){
            result += nums[i]
        }
        return result
    }
    if(op === "-") {
        let result = nums[0]
        for(let i = 1;i < nums.length;i++){
            result -= nums[i]
        }
        return result
    }
    if(op === "*") {
        let result = 1
        for(let i = 0;i < nums.length;i++){
            result *= nums[i]
        }
        return result
    }
    if(op === "/") {
        let result = nums[0]
        for(let i = 1;i < nums.length;i++){
            result /= nums[i]
        }
        return result
    }
    if(op === "min") {
        min(nums)
    }
    if(op === "max") {
        max(nums)
    }

}
console.log(calculate("max",4,2))