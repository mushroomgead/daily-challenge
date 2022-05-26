// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10510602#overview
function almostIncreasingSequence(sequence) {
  let count = 0;
  for (let i = 0; i < sequence.length - 1; i++) {
    if (sequence[i] >= sequence[i + 1]) {
      count += 1;
    }

    if (count >= 2) {
      break;
    }
  }
  return count < 2;
}

module.exports = almostIncreasingSequence;
