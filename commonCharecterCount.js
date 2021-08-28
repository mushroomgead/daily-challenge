// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10518716#overview
function commonCharecterCount(s1, s2) {
    s1 = s1.split('')
    s2 = s2.split('')
    let result1 = []
    let result2 = []
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1[i] === s2[j]) {
                result1 = result1 + s1.splice(i, 1)
                result2 = result2 + s2.splice(j, 1)
            }
        }
    }
    return result1.length
}

console.log(commonCharecterCount("aabcc", "adcaa")) // 3 (aa + c = 3) c = 3)