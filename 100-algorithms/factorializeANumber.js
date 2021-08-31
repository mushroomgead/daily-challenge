// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10685070#overview
function factorializeANumber(n, sum = 1) {
    sum = sum * n
    if (n === 1) {
        return sum
    }
    return factorializeANumber(n - 1, sum)
}

console.log(factorializeANumber(5)) // 120
console.log(factorializeANumber(10)) // 3628800