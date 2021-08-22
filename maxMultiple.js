// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10595204#overview
function maxMultiple(divisor, bound) {
    let largestValue = 0
    for (let i = 0; i < bound; i++) {
        if (divisor * i > bound) {
            largestValue = divisor * (i - 1)
            break;
        }
    }
    return largestValue
}

console.log(maxMultiple(3, 10)) // 9