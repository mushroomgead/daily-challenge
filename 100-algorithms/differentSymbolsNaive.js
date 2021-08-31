// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10528780#overview
function differentSymbolsNaive(s) {
    s = s.split('');
    let result = []

    for (let i = 0; i < s.length; i++) {
        if (!result.includes(s[i])) {
            result.push(s[i])
        }
    }
    return result.length
}

console.log(differentSymbolsNaive('cabca')) // 3