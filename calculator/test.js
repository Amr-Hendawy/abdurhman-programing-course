function calc(op,...nums){
    if(op === "-") {
        let result = nums[0]
        for(let i = 1;i < nums.length;i++){
            result -= nums[i]
        }
        return result
    }
}
console.log(calc("-",4,2))