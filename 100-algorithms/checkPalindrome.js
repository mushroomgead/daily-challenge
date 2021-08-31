// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10683830#overview
function checkPalindrome(inputString) {
    const inputStrLowercase = inputString.toLowerCase()
    const originalStr = inputStrLowercase.split('').join('')
    const reverseStr = inputStrLowercase.split('').reverse().join('')

    return originalStr === reverseStr
}

console.log(checkPalindrome("AaBaa")) // true
console.log(checkPalindrome("abac")) // false
console.log(checkPalindrome("a")) // false
