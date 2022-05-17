// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10418036#overview
function add(x, y) {
  return x + y;
}

function sum(...num) {
  let result = 0;
  num.map((_, i) => (result += num[i]));
  return result;
}

module.exports = { add, sum };
