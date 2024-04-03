function subsequenceWithSumK(i, arr, k, res, sum) {
  if (i >= arr.length) {
    if (sum === k) console.log(res);
    return;
  }
  res.push(arr[i]);
  sum += arr[i];
  subsequenceWithSumK(i + 1, arr, k, res, sum);
  res.pop(arr[i]);
  sum -= arr[i];
  subsequenceWithSumK(i + 1, arr, k, res, sum);
}

//subsequenceWithSumK(0, [3, 1, 2], 3, [], 0);

function firstSubseqWithSumK(i, arr, k, res, sum) {
  if (i >= arr.length) {
    if (sum === k) {
      console.log(res);
      return true;
    } else return false;
  }
  res.push(arr[i]);
  sum += arr[i];
  if (firstSubseqWithSumK(i + 1, arr, k, res, sum)) return true;
  res.pop(arr[i]);
  sum -= arr[i];
  if (firstSubseqWithSumK(i + 1, arr, k, res, sum)) return true;

  return false;
}

//firstSubseqWithSumK(0, [3, 1, 2], 3, [], 0);

function subsequenceCountWithK(i, arr, k, sum) {
  if (i >= arr.length) return sum === k ? 1 : 0;
  sum += arr[i];
  let left = subsequenceCountWithK(i + 1, arr, k, sum);
  sum -= arr[i];
  let right = subsequenceCountWithK(i + 1, arr, k, sum);
  return left + right;
}
console.log(subsequenceCountWithK(0, [3, 1, 2], 3, 0));
