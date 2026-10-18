function getClosestNumberToTarget(nums,target){
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target && nums[i] < closestPositive) {
            closestPositive = nums[i]
        }
        if (nums[i] < target && nums[i] > closestNegative) {
            closestNegative = nums[i]
        }
        
    }
    return [closestPositive,closestNegative]
}
console.log([12,90,40,55],100)