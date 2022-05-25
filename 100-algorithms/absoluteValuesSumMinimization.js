// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10417728#overview
function absoluteValuesSumMinimization(a) {
  const isEven = a.length % 2 === 0;
  const result = isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
  return result;
}

module.exports = absoluteValuesSumMinimization;
