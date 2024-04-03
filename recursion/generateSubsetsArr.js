function generateSubsetsArr(arr, i = 0, temp = [], res = []) {
  if (i === arr.length) {
    res.push([...temp]);
    return;
  }
  temp.push(arr[i]);
  generateSubsetsArr(arr, i + 1, temp, res);
  temp.pop(arr[i]);
  generateSubsetsArr(arr, i + 1, temp, res);
  return res;
}

//console.log(generateSubsetsArr([1, 2]));

function getSubsequenceCount(str, i = 0, temp = "", res = {}) {
  if (i === str.length) {
    if (res[temp] || temp === "") {
      return 0;
    }
    res[temp] = true;
    return 1;
  }

  const add = getSubsequenceCount(str, i + 1, temp + str[i], res);
  const notAdd = getSubsequenceCount(str, i + 1, temp, res);
  return add + notAdd;
}

function moreSubsequences(n, m, a, b) {
  let aCount = getSubsequenceCount(a);
  let bCount = getSubsequenceCount(b);
  return aCount < bCount ? b : a;
}
//console.log(moreSubsequences(1, 3, "f", "eeg"));

function combinationSum(candidates, target, ind = 0, temp = [], res = []) {
  if (target === 0) {
    console.log(temp);
    res.push([...temp]);
  }

  for (let i = ind; i < candidates.length; i++) {
    if (i > ind && candidates[i] === candidates[i - 1]) continue;
    if (candidates[i] > target) continue;
    temp.push(candidates[i]);
    combinationSum(candidates, target - candidates[i], i + 1, temp, res);
    temp.pop();
  }
  return res;
}

console.log(combinationSum([2, 1, 1, 3, 4].sort(), 4));

function combinationSumGPT(candidates, target, start = 0, path = [], res = []) {
  if (target === 0) {
    res.push([...path]);
    console.log(path);
    return;
  }

  for (let i = start; i < candidates.length; i++) {
    if (candidates[i] <= target) {
      path.push(candidates[i]);
      combinationSumGPT(candidates, target - candidates[i], i, path, res);
      path.pop();
    }
  }

  return res;
}
