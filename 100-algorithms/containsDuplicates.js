// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10757670#overview
function containsDuplicates(a) {
    let nums = []

    for (let i = 0; i < a.length; i++) {
        if (nums.includes(a[i])) {
            return false
        }
        nums.push(a[i])
    }
    return true
}
console.log(containsDuplicates([1, 2, 3, 1])) // true
console.log(containsDuplicates([3, 1])) // false