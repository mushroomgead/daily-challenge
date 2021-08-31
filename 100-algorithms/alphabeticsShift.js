// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10510650#overview
function alphabeticsShift(inputString) {
    let letters = ''
    const lastAlphabet = 'z'
    for (i = 0; i < inputString.length; i++) {
        let nextLetter = inputString[i].charCodeAt(0) + 1
        if (inputString[i] === lastAlphabet) {
            nextLetter = 97
        }
        letters += String.fromCharCode(nextLetter)
    }
    return letters
}

console.log(alphabeticsShift('crazy')) // dsbaz