const INITIAL_VALUE = 0;

function sumValue(int1, int2) {
  return Number(int1) + Number(int2);
}

function sumValueEqualSpecifiedNumber(specificNumber, min = 0, max = 100) {
  let sumList = [];
  for (let i = 0; i < 100; i++) {
    const sum = String(i)
      .split('')
      .reduce(
        (prevValue, currentValue) => sumValue(prevValue, currentValue),
        INITIAL_VALUE
      );

    if (Number(sum) === Number(specificNumber)) {
      sumList.push(i);
    }
  }

  return sumList;
}

module.exports = sumValueEqualSpecifiedNumber;
