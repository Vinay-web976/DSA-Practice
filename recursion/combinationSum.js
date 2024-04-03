function combinationSum(candidates, target, i, res) {
  if (i >= candidates.length) {
    if (target === 0) {
      console.log(res);
    }
    return;
  }
  if (target >= candidates[i]) {
    res.push(candidates[i]);
    combinationSum(candidates, target - candidates[i], i, res);
    res.pop(candidates[i]);
  }
  combinationSum(candidates, target, i + 1, res);
}

combinationSum([2, 3, 6, 7], 7, 0, [], 0);
