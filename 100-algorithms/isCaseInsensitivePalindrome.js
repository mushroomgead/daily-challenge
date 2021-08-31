// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10516872#overview
function isCaseInsensitivePalindrome(inputString) {
    const inputStrLowercase = inputString.toLowerCase()
    const originalStr = inputStrLowercase.split('').join('')
    const reverseStr = inputStrLowercase.split('').reverse().join('')

    return originalStr === reverseStr
}

console.log(isCaseInsensitivePalindrome("AaBaa")) // true
console.log(isCaseInsensitivePalindrome("abac")) // false
