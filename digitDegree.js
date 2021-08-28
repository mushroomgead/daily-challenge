// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10528834#overview
function digitDegree(n) {
    const chars = String(n).split('');
    let result = 0

    if (chars.length <= 1) return 0

    result = chars.reduce((acc, current) => parseInt(acc) + parseInt(current))

    if (String(result).length > 1) {
        return digitDegree(result)
    }
    return result
}

console.log(digitDegree(5)) // 0
console.log(digitDegree(100)) // 1
console.log(digitDegree(10)) // 1
console.log(digitDegree(91)) // 1
console.log(digitDegree(1289)) // 2