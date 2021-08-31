// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10418036#overview
function add(x, y) {
    return x + y;
}

console.log(add(1, 2))
console.log(add(3, 2))

function add2(...x) {
    let temp = 0
    x.map((_, i) => temp += x[i])
    return temp;
}

console.log(add2(1, 2, 3, 4, 5))
console.log(add2(3, 2))
