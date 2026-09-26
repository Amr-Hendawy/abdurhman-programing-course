function countEven(...nums){
    let counter = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            counter++
        }
    }
    console.log(counter)
}
countEven(1,2,4,5,8)