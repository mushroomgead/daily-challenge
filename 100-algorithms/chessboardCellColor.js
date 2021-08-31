// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10517110#overview
function chessboardCellColor(cell1, cell2) {
    const characterPosition = {
        "A": 1, 
        "B": 2, 
        "C": 3, 
        "D": 4, 
        "E": 5, 
        "F": 6, 
        "G": 7, 
        "H": 8, 
    }
    const total1IsEven = characterPosition[cell1[0]] + parseInt(cell1[1]) % 2 === 0 
    const total2IsEven = characterPosition[cell2[0]] + parseInt(cell2[1]) % 2 === 0 

    return total1IsEven && total2IsEven 
}

console.log(chessboardCellColor("A1", "C3")) // true
console.log(chessboardCellColor("A1", "H3")) // false
