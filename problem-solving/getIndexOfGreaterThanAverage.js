function getIndexOfGreaterThanAverage(...nums){
    let average = 0
    let sum = 0;
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    average = sum / nums.length
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] > average){
            count++
        }
    }
    return count
    
}
console.log(getIndexOfGreaterThanAverage(1,2,3,4,5,6,7,8,9,10))

console.log(getIndexOfGreaterThanAverage(15,20,25,30))