// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10511252#overview
function arrayConversion(inputArray, round = 0) {
    let count = round + 1
    let currentArray = []
    for (let i = 0; i < inputArray.length - 1; i++) {
        if (i % 2 == 0) {
            if (count % 2 === 0) {
                currentArray.push(inputArray[i] * inputArray[i + 1])
            } else {
                currentArray.push(inputArray[i] + inputArray[i + 1])
            }
        }
    }
    if (currentArray.length === 1) {
        return currentArray.join()
    }
    return arrayConversion(currentArray, count)
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8])) // [3, 7, 11, 15] -> [21, 165] -> 186