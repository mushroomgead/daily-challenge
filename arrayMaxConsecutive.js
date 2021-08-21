// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10511256#overview
function getHightestValue(highestNumber, currentValue) {
    if (highestNumber > currentValue) {
        return highestNumber
    }
    return currentValue
}

function arrayMaxConsecutive(inputArray, k) {
    let temp = []
    let highestNumber = 0
    let currentValue = 0
    const arraySize = inputArray.length

    for (let i = 0; i < arraySize; i++) {
        if (i < arraySize - k) {
            currentValue = inputArray[i] + inputArray[i + 1]
        } 
        if (i === arraySize - 1) {
            currentValue = inputArray[i - 1] + temp[arraySize - 3] 
        }
        temp.push(currentValue)
        highestNumber = getHightestValue(highestNumber, currentValue)
    }
    return highestNumber
}

console.log(arrayMaxConsecutive([2, 3, 5, 1, 6], 2)) // 8
// 2 + 3 = 5
// 3 + 5 = 8
// 5 + 1 = 6
// 1 + 6 = 7
