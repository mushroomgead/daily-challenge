// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10514838#overview
function arrayPreviousLess(inputArray) {
    let result = []
    for (let i = 0; i < inputArray.length - 1; i++) {
        if (i === 0 || inputArray[i] > inputArray[i + 1]) {
            result.push(-1)
        } 
        if (inputArray[i] < inputArray[i + 1]) {
            result.push(inputArray[i])
        }
    }
    return result
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5])) // [-1, 3, -1, 2, 4]