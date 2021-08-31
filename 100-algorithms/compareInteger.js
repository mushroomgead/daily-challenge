// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10519050#overview
function compareInteger(a, b) {
    const numA = parseInt(a)
    const numB = parseInt(b)

    if (numA === numB) {
        return 'equal'
    }
    if (numA > numB) {
        return 'greater'
    }
    return 'less'
    
}

console.log(compareInteger('12', '13')) // less
console.log(compareInteger('875', '799')) // greater
console.log(compareInteger('1000', '1000')) // equal