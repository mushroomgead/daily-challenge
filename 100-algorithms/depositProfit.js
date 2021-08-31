// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10519418#overview
function depositProfit(deposit, rate, threshold) {
    let total = deposit
    let count = 0
    while (total < threshold) {
        total = total + (total * (rate / 100))
        count++
    }
    return count
}

console.log(depositProfit(100, 20, 170)) // 3