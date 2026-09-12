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
        return 
    }

}
console.log(calculate("-",4,2))