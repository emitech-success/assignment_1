function sumOne(x) {
  let sum1 = 0;
  for (let i = 0; i < x.length; i++) {
    sum1 += x[i];
  }
  return sum1;
}
function sumTwo(y) {
  let sum2 = 0;
  for (let j = 0; j < y.length; j++) {
    sum2 += y[j];
  }
  return sum2;
}

function highestSum(x, y) {
  if (sumOne(x) > sumTwo(y)) {
    return sumOne(x);
  }
  return sumTwo(y);
}

module.exports = highestSum;
