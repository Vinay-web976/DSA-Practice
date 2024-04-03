function minCost(arr, n) {
  let sum = 0;
  let sumArray = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    sum += arr[i];
    sumArray[i] = sum;
  }

  return sumArray;
}

console.log(minCost([4, 2, 7, 6, 9], 5));
