// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10670654#overview
function shapeArea(n) {
    let sum = 1
    for (let i = 1; i < n; i++) {
        sum = sum + (4 * i)
    }
    return sum
}
console.log(shapeArea(2)) // 5
console.log(shapeArea(3)) // 13