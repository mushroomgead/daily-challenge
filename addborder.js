// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10510492#overview
function addborder(picture) {
    const wall = '*'.repeat(picture[0].length + 2)

    picture.unshift(wall)
    picture.push(wall)

    for (i = 1; i < picture.length; i++) {
        picture[i] = '*'.concat(picture[i], '*')
    }
    return picture
}

console.log(addborder(["abc"]))
console.log(addborder(["abc","def"]))
console.log(addborder(["abc","def", "ght"]))