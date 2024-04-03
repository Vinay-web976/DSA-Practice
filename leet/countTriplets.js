function countTriplets(arr, n) {
  let isPresent = {};
  let count = 0;
  for (let i = 0; i < n; i++) isPresent[arr[i]] = true;

  for (let i = 0; i < n; i++) {
    for (j = i; j < n; j++) {
      let sum = arr[i] + arr[j];
      if (i !== j && isPresent[sum]) count++;
    }
  }
  return count;
}

function countTripletsGPT(arr, n) {
  let count = 0;

  // Sort the array for better efficiency
  arr.sort((a, b) => a - b);

  for (let i = n - 1; i >= 0; i--) {
    let left = 0;
    let right = i - 1;
    let targetSum = arr[i];

    while (left < right) {
      let currentSum = arr[left] + arr[right];

      if (currentSum === targetSum) {
        count++;
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }

  return count;
}
console.log(countTripletsGPT([1, 5, 3, 2], 4));
