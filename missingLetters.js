// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10747326#overview
function missingLetters(letters) {
    let missingLetter = ''
    let initLetter = []

    for (let i = 0; i < letters.length; i++) {
        initLetter[i] = letters[i].charCodeAt()
        if (i > 0 && initLetter[i] !== initLetter[i - 1] + 1) {
            missingLetter = String.fromCharCode(initLetter[i] - 1)
        }
    }
    return missingLetter || undefined
}
console.log(missingLetters("abce")) // d
console.log(missingLetters("abcdefghjklmno")) // i
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz")) // undefined