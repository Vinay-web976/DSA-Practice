function findMinDiff(arr, n, m) {
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = m - 1;
  let min = Number.MAX_SAFE_INTEGER;
  while (j < n) {
    min = Math.min(min, arr[j] - arr[i]);
    i++;
    j++;
  }
  return min;
}
