// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10510826#overview
function areEquallyStrong(urLeft, urRight, frnLeft, frnRight) {
    const leftSide = urLeft + frnLeft
    const rightSide = urRight + frnRight
    const ur = urRight + urRight
    const frn = frnRight + frnRight
    return leftSide === rightSide || ur === frn
}

console.log(areEquallyStrong(10, 15, 15, 10)) // true
console.log(areEquallyStrong(15, 10, 15, 10)) // true
console.log(areEquallyStrong(15, 10, 15, 9)) // false