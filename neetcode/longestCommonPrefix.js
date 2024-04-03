function longestCommon(strs) {
  strs.sort();
  let first = strs[0];
  let last = strs[1];
  let res = "";
  let i = 0;
  let j = 0;

  while (first[i] && first[i] === last[j]) {
    res += first[i];
    i++;
    j++;
  }

  return res;
}

longestCommon([""]);
