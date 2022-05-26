// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10510826#overview
function areEquallyStrong(urLeft, urRight, frnLeft, frnRight) {
  const leftSide = urLeft + frnLeft;
  const rightSide = urRight + frnRight;
  const ur = urRight + urRight;
  const frn = frnRight + frnRight;
  return leftSide === rightSide || ur === frn;
}

module.exports = areEquallyStrong;
