function print2ndLargest(arr, n) {
  let firstLarge = 0;
  let secondLarge = 0;
  for (let i = 0; i < n; i++) {
    firstLarge = Math.max(arr[i], firstLarge);
  }

  for (let i = 0; i < n; i++) {
    if (arr[i] > secondLarge && arr[i] < firstLarge) {
      secondLarge = arr[i];
    }
  }
  return secondLarge;
}

console.log(
  print2ndLargest(
    [
      28, 43, 26, 65, 60, 54, 51, 35, 42, 48, 33, 40, 58, 38, 64, 47, 44, 49,
      46, 25, 57, 39, 55, 45, 29, 32, 61, 53, 31, 36, 56, 63, 30, 52, 27, 34,
      50, 41, 37, 66, 62, 59,
    ],
    42
  )
);
