// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10519258#overview
function convertString(s, t) {
    let index = 0
    let result = []
    
    for (let j = 0; j < s.length; j++) {
        if (s[j] === t[index]) {
            result.push(s[j])
            index++
        }
    }
    return result.join('') === t
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights')) // true
console.log(convertString('addbyca', 'abcd')) // false
