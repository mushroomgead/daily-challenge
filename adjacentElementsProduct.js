// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10510522#overview
function adjacentElementsProduct(inputArray) {
    let largestValue = 0
    let currentValue = 0

    for (let i = 1; i < inputArray.length - 1; i++) {
        currentValue = inputArray[i] * inputArray[i + 1]
        
        if (currentValue > largestValue) {
            largestValue = currentValue
        }
    }
    return largestValue
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))