function maxSubarraySum(arr, N) {
  let maxCurrent = arr[0];
  let maxGlobal = arr[0];

  for (let i = 1; i < N; i++) {
    maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
    maxGlobal = Math.max(maxCurrent, maxGlobal);
  }
  return maxGlobal;
}

function maxSubarrayCircular(arr, N) {
  let maxCurrent = arr[0];
  let maxGlobal = arr[0];
  let minCurrent = arr[0];
  let minGlobal = arr[0];

  let sum = 0;
  arr.forEach((item) => (sum += item));

  for (let i = 1; i < N; i++) {
    maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
    maxGlobal = Math.max(maxCurrent, maxGlobal);
    minCurrent = Math.min(arr[i], arr[i] + minCurrent);
    minGlobal = Math.min(minCurrent, minGlobal);
  }

  if (maxGlobal < 0) return maxGlobal;

  return Math.max(maxGlobal, sum - minGlobal);
}
console.log(maxSubarrayCircular([5, -2, 3, 4], 4));
