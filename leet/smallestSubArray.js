function smallestSubWithSum(a, n, x) {
  let i = 0,
    j = 0;
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  while (j <= n) {
    if (sum > x) {
      min = Math.min(min, j - i);
      sum = sum - a[i];
      i++;
    } else {
      sum += a[j];
      j++;
    }
  }
  return min === Number.MAX_SAFE_INTEGER ? 0 : min;
}

console.log(smallestSubWithSum([6, 3, 4, 5, 4, 3, 7, 9], 8, 16));
