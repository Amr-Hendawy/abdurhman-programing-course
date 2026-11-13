function getAverage(total,subjectsCount){
    return total / subjectsCount;
}
function studentRecord(marks){
    let total = 0;   
    
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    average = getAverage(total,marks.length)
    if(average >= 70){
        return "good"
    }
    else if(average >= 60){
        return "fair"
    }
    return "fail"
}



console.log(studentRecord([50,60,70]));
