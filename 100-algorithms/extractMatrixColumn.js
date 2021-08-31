// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10532122#overview
function extractMatrixColumn(matrix, column) {
    let result = []
    for (let i = 0; i < matrix.length; i++) {
        result.push(matrix[i][column])
    }
    return result
}

const matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]]
const column = 2
console.log(extractMatrixColumn(matrix, column)) // [1, 0, 3]