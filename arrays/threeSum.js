function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i - 1] !== nums[i]) {
      let j = i + 1;
      let k = nums.length - 1;

      while (j < k) {
        const sum = nums[i] + nums[j] + nums[k];
        if (
          sum === 0 &&
          !(nums[j - 1] === nums[j] && nums[k] === nums[k + 1])
        ) {
          res.push([nums[i], nums[j], nums[k]]);
          j++;
          k--;
        } else if (sum < 0) {
          j++;
        } else {
          k--;
        }
      }
    }
  }

  return res;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
