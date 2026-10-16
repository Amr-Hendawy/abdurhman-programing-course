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

function countOdd(...nums){
    let counter = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
            counter++
        }
    }
    console.log(counter)
}
countOdd(1,2,4,5,8)

function countEvenAndOdd(...nums){
    let evenCounter = 0
    let oddCounter = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            evenCounter++
        } else {
            oddCounter++
        }
    }
    console.log(`Even: ${evenCounter}, Odd: ${oddCounter}`)
}
countEvenAndOdd(1,2,4,5,8)