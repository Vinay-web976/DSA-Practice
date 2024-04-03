function consecutiveOnes(arr) {
  let j = 0;
  let maxCount = 0;
  let count = 0;
  while (j < arr.length) {
    if (arr[j] === 0) {
      count = 0;
    } else {
      count++;
      maxCount = Math.max(count, maxCount);
    }
    j++;
  }
}

consecutiveOnes([1, 1, 1, 1]);
