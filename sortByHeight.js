// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10676716#overview
function sortByHeight(a) {
    const result = a.filter(item => item !== -1).sort()
    let currentIndex = 0

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== -1) {
            a[i] = result[currentIndex]
            currentIndex++
        }
    }
    return a
}
const a = [-1, 150, 190, 170, -1, -1, 160, 180]
console.log(sortByHeight(a))
// [-1, 150, 160, 170, -1, -1, 180, 190]