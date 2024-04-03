function zigzag(arr, n) {
  for (let i = 0, j = 1; j < n; i++, j++) {
    if ((i % 2 === 0 && arr[i] > arr[j]) || (i % 2 === 1 && arr[i] < arr[j]))
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

console.log(zigzag([4, 3, 7, 8, 6, 2, 1], 7));
