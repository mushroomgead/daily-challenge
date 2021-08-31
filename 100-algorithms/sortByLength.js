// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10676734#overview
function sortByLength(a) {
    return a.sort((str1, str2) => str1.length - str2.length)
}
const a = ["abc", "", "aaa", "a", "zz"]
console.log(sortByLength(a))
// ["", "a", "zz", "abc", "aaa"]