// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10746752#overview
function chunkyMonkey(array, size) {
    const firstElement = array.slice(0, size)
    const lastElement = array.slice(size - array.length)
    return [firstElement, lastElement]
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2)) // [["a", "b"], ["c", "d"]]
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4)) // [[0, 1, 2, 3], [4, 5]]
