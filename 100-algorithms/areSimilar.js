// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10510864#overview

function areSimilar(a, b) {
  const sortedA = a.sort();
  const sortedB = b.sort();

  if (sortedA.length !== sortedB.length) {
    return false;
  }
  const isDifference = sortedA.find((item, index) => item !== sortedB[index]);
  return !isDifference;
}

module.exports = areSimilar;
