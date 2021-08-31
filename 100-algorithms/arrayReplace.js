// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10514946#overview
function arrayReplace(inputArray, eleToReplace, subsitutionEle) {
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === eleToReplace) {
            inputArray[i] = subsitutionEle
        }
    }
    return inputArray
}

console.log(arrayReplace([1, 2, 1], 1, 3)) // [3, 2, 3]