// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10514558#content
function arrayMaximalAdjacentDifference(inputArray) {
    let highestValue = 0
    for (let i = 0; i < inputArray.length - 1; i++) {
        const sum = Math.abs(inputArray[i] - inputArray[i + 1])
        if (sum > highestValue) {
            highestValue = sum
        }
    }
    return highestValue
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0])) // 3