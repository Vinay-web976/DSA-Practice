function findMaximum(arr, n) {
  let start = 0,
    end = n - 1;
  while (start < end) {
    let mid = parseInt(start + (end - start) / 2);
    if (arr[mid] < arr[mid + 1]) start = mid + 1;
    else end = mid;
  }
  return arr[start]; // In case of an unexpected scenario
}

console.log(findMaximum([1, 45, 47, 50, 5], 5));
