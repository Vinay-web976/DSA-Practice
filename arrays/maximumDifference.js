function maximumDifference(arr) {
  let minLeft = [];
  let maxRight = [];
  minLeft[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minLeft[i - 1]) minLeft.push(arr[i]);
    else minLeft.push(minLeft[i - 1]);
  }
  maxRight[arr.length - 1] = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > maxRight[i + 1]) maxRight[i] = arr[i];
    else maxRight[i] = maxRight[i + 1];
  }

  let maxDifference = maxRight[0] - minLeft[0];

  for (let i = 1; i < arr.length; i++) {
    const currDiff = maxRight[i] - minLeft[i];
    maxDifference = Math.max(maxDifference, currDiff);
  }

  return maxDifference;
}

function maxDifferenceEfficient(arr) {
  let maxDifference = arr[1] - arr[0];

  let minElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - minElement > maxDifference) {
      maxDifference = arr[i] - minElement;
    }

    if (arr[i] < minElement) {
      minElement = arr[i];
    }
  }

  return maxDifference;
}

console.log(maxDifferenceEfficient([7, 9, 5, 6, 3, 2]));
