const INITIAL_VALUE = 0;

function sumValueEqualSpecifiedNumber(specificNumber, min = 0, max = 100) {
  let sumList = [];
  for (let i = 0; i < 100; i++) {
    const sum = String(i)
      .split('')
      .reduce(
        (prevValue, currentValue) => Number(prevValue) + Number(currentValue),
        INITIAL_VALUE
      );

    if (Number(sum) === Number(specificNumber)) {
      sumList.push(i);
    }
  }

  return sumList;
}

module.exports = sumValueEqualSpecifiedNumber;
