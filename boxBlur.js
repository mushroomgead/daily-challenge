// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10683760#overview
function boxBlur(image) {
    let count = 0
    let sum = 0
    for (let x = 0; x < image.length; x++) {
        for (let y = 0; y < image.length; y++) {
            sum = sum + image[x][y]
            count += 1
        }

    }
    return Math.floor(sum / count)
}

const image = [[1, 1, 1],
               [1, 7, 1],
               [1, 1, 1]]
console.log(boxBlur(image)) // [[1]]
