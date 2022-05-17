// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10417728#overview
function absoluteValuesSumMinimization(a) {
  const isEven = a.length % 2 === 0;
  const result = isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
  return result;
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
