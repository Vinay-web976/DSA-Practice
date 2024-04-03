function firstRepeated(arr, n) {
  // your code here
  let index = {};
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    if (index[arr[i]] >= 0) {
      min = Math.min(min, index[arr[i]]);
    } else {
      index[arr[i]] = i;
    }
  }
  return min === Number.MAX_SAFE_INTEGER ? -1 : min;
}

console.log(firstRepeated([1, 5, 3, 4, 3, 5, 6], 7));
