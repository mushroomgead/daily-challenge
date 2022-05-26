// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10510754#overview
function alternatingSums(a) {
  let sum1 = 0;
  let sum2 = 0;
  let currentIndex = 1;
  for (let i = 0; i < a.length; i++) {
    if (currentIndex % 2 === 0) {
      sum2 += a[i];
    } else {
      sum1 += a[i];
    }
    currentIndex += 1;
  }
  return [sum1, sum2];
}

module.exports = alternatingSums;
