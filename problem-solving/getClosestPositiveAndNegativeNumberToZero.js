function getClosestPositiveAndNegativeNumberToZero(...nums){
    let closestPositive = Infinity
    let closestNegative = -Infinity

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0 && nums[i] < closestPositive) {
            closestPositive = nums[i]
        }
        if (nums[i] < 0 && nums[i] > closestNegative) {
            closestNegative = nums[i]
        }
        
    }
    return [closestPositive,closestNegative]
}
console.log(getClosestPositiveAndNegativeNumberToZero(3,4,5,-1,-2,-3))