function findPairDiff(arr, size, n) {
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = i + 1;
  while (j < n) {
    const diff = arr[j] - arr[i];
    if (diff === n) return true;
    else if (diff < n) j++;
    else {
      i++;
      j = i + 1;
    }
  }
  return false;
}
console.log(findPairDiff([5, 20, 3, 2, 5, 80], 6, 15));
