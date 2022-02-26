function divisible(a) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0 && a[i] > 15) {
      answer++;
    }
  }
  return answer;
}

module.exports = divisible;
