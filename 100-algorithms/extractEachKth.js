// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10531860#overview
function extractEachKth(inputArray, k) {
    return inputArray.filter((_, index) => index !== k)
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)) // [1, 2, 4, 5, 6, 7, 8, 9, 10]