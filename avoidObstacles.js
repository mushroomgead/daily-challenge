// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10516756#overview
function avoidObstacles(inputArray) {
    let obstacles = 0
    inputArray.sort()
    for (let i = 0; i < inputArray.length - 1; i++) {
        const firstIndex = i === 0
        const adjacentIndex = inputArray[i] + 1 === inputArray[i + 1]
        const lastIndex = i === inputArray.length - 2
    
        if (firstIndex || adjacentIndex || lastIndex) {
            obstacles += 1
        }
    }
    return obstacles
}

console.log(avoidObstacles([5, 3, 6, 7, 9])) // 4