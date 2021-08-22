// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10516892#overview
function centuryFromYear(year) {
    return Math.ceil(year / 100)
}

console.log(centuryFromYear(1905)) // 20
console.log(centuryFromYear(1700)) // 17
