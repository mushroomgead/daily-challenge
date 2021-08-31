// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10510502#overview
function addTwoDigits(n) {
    const nums = String(n).split('')
    const reducer = (accu, current) => parseInt(accu) + parseInt(current)
    return nums.reduce(reducer)
}

console.log(addTwoDigits(29))