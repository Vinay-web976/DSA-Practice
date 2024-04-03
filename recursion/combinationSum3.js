function combinationSum(arr, k, n, ind = 0, temp = [], res = []) {
  if (n === 0 && temp.length === k) {
    res.push([...temp]);
    return;
  }

  for (let i = ind; i < arr.length; i++) {
    temp.push(arr[i]);
    combinationSum(arr, k, n - arr[i], i + 1, temp, res);
    temp.pop();
  }
  return res;
}

console.log(combinationSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 7));
