// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10517020#overview
function characterParity(symbol) {
    if (isNaN(symbol)) {
        return 'not a digit'
    }
    if (parseInt(symbol) % 2 === 0) {
        return 'even'
    }
    return 'odd'
}

console.log(characterParity('5')) // odd
console.log(characterParity('8')) // even
console.log(characterParity('q')) // not a digit
