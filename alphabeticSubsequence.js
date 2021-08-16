// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10510704#overview
function alphabeticSubsequence(s) {
    const letters = s.split('');
    let isSubsequenceLetter = true

    for (let i = 0; i < letters.length - 1 ; i++) {
        if (letters[i].charCodeAt(0) >= letters[i + 1].charCodeAt(0)) {
            isSubsequenceLetter = false;
            break;
        }
    }
    return isSubsequenceLetter
}

console.log(alphabeticSubsequence('effg')) // false
console.log(alphabeticSubsequence('cdce')) // false
console.log(alphabeticSubsequence('zab')) // false

console.log(alphabeticSubsequence('ace')) // true
console.log(alphabeticSubsequence('bxz')) // true