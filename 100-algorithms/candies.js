// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10516816#overview
function candies(n, m) {
    return Math.floor(m / n) * n
}

console.log(candies(3, 10)) // 9
