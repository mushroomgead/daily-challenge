// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10518914#overview
function companyBotStrategy(trainingData) {
    let result = 0
    let total = 1

    for (let i = 0; i < trainingData.length; i++) {
        if (trainingData[i][1] >= 1) {
            result = result + trainingData[i][0]
            total++
        }
    }
    return result / total
}

const trainingData = [[3, 1], [6, 1], [4, 1], [5, 1]] // 4.5
const trainingData2 = [[4, 1], [4, -1], [0, 0], [6, 1]] // 5.0
const trainingData3 = [[4, -1], [0, 0], [5, -1]] // 0.0
console.log(companyBotStrategy(trainingData)) 