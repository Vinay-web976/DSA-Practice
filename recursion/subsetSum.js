function subsetSum(arr, i = 0, sum = 0, res = []) {
  if (i === arr.length) {
    res.push(sum);
    return;
  }
  subsetSum(arr, i + 1, sum + arr[i], res);
  subsetSum(arr, i + 1, sum, res);
  return res.sort();
}

console.log(subsetSum([5, 2, 1]));
