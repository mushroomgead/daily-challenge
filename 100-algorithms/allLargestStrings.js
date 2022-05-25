// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10510544#overview
function allLargestStrings(inputArray) {
  let longestWords = [];
  let longestLength = 0;

  for (i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length >= longestLength) {
      longestWords.push(inputArray[i]);
      longestLength = inputArray[i].length;
    }
  }
  return longestWords;
}

module.exports = allLargestStrings;
