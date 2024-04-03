function removeDuplicates(nums) {
  let i = 0;
  let j = 1;

  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      j++;
    } else {
      i++;
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }
  return i + 1;
}

function removeElements(nums, val) {
  let pos = nums.length - 1;
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] == val) {
      [nums[i], nums[pos]] = [nums[pos], nums[i]];
      pos--;
    }
  }
  return pos + 1;
}

function removeDuplicatesMine(arr, n) {
  let pos = 0;
  let i = 1;

  while (i < n) {
    if (arr[i] === arr[pos]) {
      i++;
    } else {
      pos++;
      [arr[i], arr[pos]] = [arr[pos], arr[i]];
      i++;
    }
  }
  return pos+1;
}

console.log(removeDuplicatesMine([1, 2, 2, 4, 4, 5, 6], 7));
