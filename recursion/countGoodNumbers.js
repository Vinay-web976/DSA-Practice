function isGood(digit, i = 0) {
  const isPrime = [2, 3, 5, 7];
  const n = parseInt(digit[i]);
  if (i >= digit.length) return true;
  if (i % 2 === 0) {
    if (n % 2 !== 0) return false;
  } else {
    if (!isPrime.includes(n)) return false;
  }
  return isGood(digit, i + 1);
}

function countGoodNumbers(n) {
  let max = parseInt("9".repeat(n));
  let min = n === 1 ? 0 : parseInt("9".repeat(n - 1)) + 1;
  let count = 0;
  for (let i = min; i <= max; i++) {
    if (isGood(i.toString())) count = count + 1;
  }
  return count;
}
//console.log(countGoodNumbers(4));

function isGoodNinja(digit, sum = 0, key) {
  const num = digit % 10;
  if (digit === 0) return true;
  if ((sum >= num && sum !== 0) || num === key) return false;
  sum += num;
  return isGoodNinja(Math.floor(digit / 10), sum);
}

function goodNumbers(a, b, digit) {
  let res = [];
  for (let i = a; i <= b; i++) {
    if (isGoodNinja(i, 0, digit)) res.push(i);
  }
  return res;
}
console.log(goodNumbers(20, 45, 1));
