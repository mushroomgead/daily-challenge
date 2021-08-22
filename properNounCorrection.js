// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10670268#overview
function properNounCorrection(noun) {
    const firstLetter = noun[0].toUpperCase();
    const remainLetter = noun.slice(1).toLowerCase();

    return firstLetter.concat(remainLetter)
}
console.log(properNounCorrection("pARiS")) // Paris
console.log(properNounCorrection("John")) // John