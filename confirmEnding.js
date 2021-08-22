// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10746608#overview
function confirmEnding(str, target) {
    const subEndStr = str.substr(target.length - 1)
    return subEndStr === target
}
console.log(confirmEnding("Abstraction", "action")) // true
console.log(confirmEnding("Open sesame", "pen")) // false