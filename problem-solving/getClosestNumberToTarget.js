function getClosestNumberToTarget(nums,target){
    let closest = -Infinity
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < target && nums[i] > closest) {
            closest = nums[i]
        }
        
    }
    return closest
}
console.log(getClosestNumberToTarget([90,80,30,55,95],120))