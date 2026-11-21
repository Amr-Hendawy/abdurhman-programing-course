function biggestNum(num1,num2,num3){
    let firstnum = ""
    let secondnum = ""
    let thirdnum = ""
    if(num1 > num2 && num1 > num3){
        firstnum = `${num1}`
    }else if(num2 > num1 && num2 > num3){
        secondnum = `${num2}`
    }else{
        thirdnum = `${num3}`
    }
    return `${firstnum}${secondnum}${thirdnum}`
}
console.log(biggestNum(13,18,19));
